import SearchResults from "@/types/pages";

export function rankPages(pages: SearchResults[], query: string) {
    const rankedPages = pages.map((page) => {
        const { url, title, desc, name } = page;
        const urlRank = url ? rankString(url, query) : 0;
        const titleRank = title ? rankString(title, query) : 0;
        const descRank = desc ? rankString(desc, query) : 0;
        const nameRank = name ? rankString(name, query) : 0;
        const rank = urlRank + titleRank + descRank + nameRank * 4;
        return { ...page, rank };
    });
    return rankedPages.sort((a, b) => b.rank - a.rank);
}

function rankString(str: string, query: string) {
    const words = query.split(" ");
    let rank = 0;
    words.forEach((word) => {
        if (str.split(" ").some((w) => w.localeCompare(word, undefined, { sensitivity: 'base' }) === 0)) {
            rank += 1;
        }
    });
    return rank;
}