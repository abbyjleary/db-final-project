export interface Artist {
    artID: number;
    artName: string;
    artImgPath: string;
}

export interface Album {
    albumID: number;
    albumName: string;
    artID: number;
    albumImgPath: string;
    percentComplete: number | null;
}

export interface AlbumVersion {
    versionID: number;
    albumID: number;
    version: string;
    owned: boolean;
    onTheWay: boolean;
    priority: number | null;
    value: number | null;
    versionImgPath: string;
}

export interface Photocard{
    pcID: number;
    albumID: number;
    pcDesc: string | null;
    pcImgPath: string;
    pcOwned: boolean;
    pcOnTheWay: boolean;
    pcPriority: number | null;
    pcValue: number | null;
}

export interface Member{
    memberID: number;
    memberName: string;
    artID: string;
}