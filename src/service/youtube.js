import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
  });


export const mostPopular = async () => {
    const promises = [];
    const {data:{items: videos}} = await httpClient.get('videos', {
        params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 25,
        }
    });
    
    await videos.forEach(video => {
          promises.push(
           channel(video.snippet.channelId)
        .then(channelThumbnail => video.channelThumbnail = channelThumbnail));
        });
    
    await Promise.all(promises);

    return videos;
    };

export const search = async (query) => {
    const promises = [];
    const {data:{items:videos}} = await httpClient.get('search', {
        params: {
            part: 'snippet',
            maxResults: 25,
            q: query,
            type: 'video',
        }
    });

    await videos.forEach(video => {
        video.id = video.id.videoId;
        promises.push(
         channel(video.snippet.channelId)
      .then(channelThumbnail => video.channelThumbnail = channelThumbnail));
      });
  
    await Promise.all(promises);

    return videos;
    };

const channel = async (id) => {
        const response = await httpClient.get('channels', {
            params: {
                part: 'snippet',
                id: id,
            }
        });

        return response.data.items[0].snippet.thumbnails.medium.url;
    };