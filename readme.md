# Scroll Magic Example
- video conversion: ffmpeg -i yourInputVideo.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p theOutputNameOfTheVideo.mp4