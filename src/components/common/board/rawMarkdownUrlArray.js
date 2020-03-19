const rawMarkdownUrlArray = (path) => {
    const rawMarkdownUrl = `https://raw.githubusercontent.com/syki66/suvin-cosmetic/master/src/markdowns/${path}`;

    //제목만 가져오기
    const importAll = (r) => r.keys().map(r);
    const markdownFolder = importAll(require.context("../../../markdowns/", true, /\.md$/)).sort().reverse();
    
    // 경로에 맞는 마크다운만 선별하기
    const classifiedMDFolder = markdownFolder.filter((each) => {
        return each.indexOf(`.${path}`) !== -1;
    })

    //마크다운 이름 다듬기
    const trimedmarkdownName = classifiedMDFolder.map((eachMD) => {
        return eachMD.substring(eachMD.indexOf("media")+6, eachMD.indexOf("."));
    })
    
    // 깃허브 레포 raw 파일에 연결
    return trimedmarkdownName.map((each) => {
        return `${rawMarkdownUrl}/${each}.${path}.md`
    })
}

export default rawMarkdownUrlArray;