import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Loader2, RefreshCw, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoPlayer = ({ src, poster, className = '' }) => {
  // State management
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  // Refs
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeout = useRef(null);
  const wasPlaying = useRef(false);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play().catch(err => {
        console.error('Error playing video:', err);
        setError('Failed to play video. Please try again.');
      });
    } else {
      videoRef.current.pause();
    }
  }, []);

  // Handle video click (play/pause)
  const handleVideoClick = useCallback((e) => {
    e.stopPropagation();
    togglePlay();
  }, [togglePlay]);

  // Update progress bar
  const updateProgress = useCallback(() => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    setCurrentTime(currentTime);
    setProgress((currentTime / duration) * 100 || 0);
  }, []);

  // Format time (mm:ss)
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle seeking on progress bar click
  const handleSeek = (e) => {
    if (!videoRef.current) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * duration;
    
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
    setProgress(pos * 100);
  };

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen().catch(console.error);
    }
  }, []);

  // Handle fullscreen change
  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  // Show controls with auto-hide
  const showControlsWithTimeout = useCallback(() => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    
    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  }, [isPlaying]);

  // Effect for setting up event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    const handleError = () => {
      setIsLoading(false);
      setError('Failed to load video. Please try again later.');
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    video.addEventListener('ended', handleEnded);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Initial setup
    setDuration(video.duration || 0);
    if (video.readyState >= 2) {
      setIsLoading(false);
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      clearTimeout(controlsTimeout.current);
    };
  }, [updateProgress, handleFullscreenChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!videoRef.current) return;
      
      switch (e.keyCode) {
        case 32: // Space
          e.preventDefault();
          togglePlay();
          break;
        case 37: // Left arrow
          e.preventDefault();
          videoRef.current.currentTime = Math.max(0, currentTime - 5);
          break;
        case 39: // Right arrow
          e.preventDefault();
          videoRef.current.currentTime = Math.min(duration, currentTime + 5);
          break;
        case 70: // F key
          e.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleFullscreen, currentTime, duration]);

  // Show/hide controls on mouse movement
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = () => showControlsWithTimeout();
    const handleMouseEnter = () => setShowControls(true);
    const handleMouseLeave = () => {
      if (isPlaying) {
        clearTimeout(controlsTimeout.current);
        controlsTimeout.current = setTimeout(() => {
          setShowControls(false);
        }, 500);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(controlsTimeout.current);
    };
  }, [isPlaying, showControlsWithTimeout]);

  // Error state
  if (error) {
    return (
      <div className="relative aspect-video bg-gray-900 rounded-lg flex flex-col items-center justify-center text-center p-6">
        <RefreshCw className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-lg font-medium text-white mb-2">Error Loading Video</h3>
        <p className="text-gray-300 mb-4">{error}</p>
        <Button 
          variant="outline" 
          className="border-electric-blue text-electric-blue hover:bg-electric-blue/10"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-video bg-black rounded-lg overflow-hidden group ${className}`}
      onClick={handleVideoClick}
      role="button"
      tabIndex={0}
      aria-label="Video player"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain bg-black"
        preload="metadata"
        playsInline
        poster={poster}
        onClick={(e) => e.stopPropagation()}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10">
          <Loader2 className="w-12 h-12 text-electric-blue animate-spin" />
        </div>
      )}

      {/* Controls Overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 flex flex-col justify-end ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress Bar */}
        <div 
          className="w-full h-1.5 bg-gray-700 cursor-pointer group-hover:h-2 transition-all duration-200"
          onClick={(e) => {
            e.stopPropagation();
            handleSeek(e);
          }}
        >
          <div 
            className="h-full bg-electric-blue transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls Bar */}
        <div className="bg-gradient-to-t from-black/90 to-transparent p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="text-white hover:text-electric-blue transition-colors focus:outline-none"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            {/* Time Display */}
            <div className="text-sm text-gray-300 font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Fullscreen Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
            className="text-gray-300 hover:text-white transition-colors focus:outline-none"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5" />
            ) : (
              <Maximize className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
