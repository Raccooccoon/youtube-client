/* tslint:disable semicolon */

export interface ISearchByKeywordItem {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: IThumbnail,
      medium: IThumbnail,
      high: IThumbnail
    },
    channelTitle: string,
    liveBroadcastContent: string
  }
}

interface IThumbnail {
  url: string,
  width: number,
  height: number
}
