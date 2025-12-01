export interface Tournament {
    name: string;
    result: string;
    prize: string;
    type: 'win' | 'place2' | 'place3';
}

export interface Achievement {
    icon: string;
    text: string;
}

export interface Statistic {
    icon: string;
    value: string;
    label: string;
}

export interface SocialLink {
    platform: string;
    icon: string;
    url: string;
    title: string;
}

export interface Build {
    id: string;
    name: string;
    image: string;
    wikiUrl: string;
    perks: BuildItem[];
    addons: BuildItem[];
}

export interface BuildItem {
    name: string;
    icon: string;
    wikiUrl: string;
}
