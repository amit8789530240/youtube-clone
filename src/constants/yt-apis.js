export const videoListAPIEndpoint =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=";
export const api_key = "AIzaSyAua83R5Cef-oRs5PXYJfUCF0fsfZ5-TPo";
export const searchSuggestionsAPIEndPoint =
  "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

export const ApiEndpointforGetVideosByChannelID =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSiDGb0MnHFGjs4E2WKvShw&type=video&maxResults=10&key=AIzaSyAua83R5Cef-oRs5PXYJfUCF0fsfZ5-TPo";

export const ApiEndpointToGetVideoMetadataByVideoID =
  "`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoID}&key=${ApiKey}`";
