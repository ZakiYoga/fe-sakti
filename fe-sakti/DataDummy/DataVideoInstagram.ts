export interface LocalVideo {
    id: number;
    title: string;
    url_video: string;
}

export interface Window {
    instgrm?: {
        Embeds: {
            process(): void;
        };
    };
}

export const localVideos: LocalVideo[] = [
    {
        id: 1,
        title: "Video Product 1",
        url_video: "/videos/ayoe_widya83_2510083781.mp4"
    },
    {
        id: 2,
        title: "Video Product 2",
        url_video: "/videos/ayoe_widya83_2510141284.mp4"
    },
    {
        id: 3,
        title: "Video Product 3",
        url_video: "/videos/ayoe_widya83_2510171281.mp4"
    },
    {
        id: 4,
        title: "Video Product 4",
        url_video: "/videos/geger.gaden_2510112702.mp4"
    }
]; 