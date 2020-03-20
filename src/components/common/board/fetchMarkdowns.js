import rawMarkdownUrlArray from "./rawMarkdownUrlArray"

const fetchMarkdowns = async (path) => {

    // front matter 뽑아서 (날짜, 타이틀, 내용) 객체리터럴로 리턴해주는 함수
    function sliceFrontMatter (text, index) {
        const parsedText = text.substring(text.indexOf("---")+4, text.indexOf("---", 3)-1);
        
        const date = parsedText.substring(parsedText.indexOf('date: "')+7, parsedText.indexOf('"' , parsedText.indexOf('date: "')+7) );
        const title = parsedText.substring(parsedText.indexOf('title: "')+8, parsedText.indexOf('"' , parsedText.indexOf('title: "')+8) );
        const writer = parsedText.substring(parsedText.indexOf('writer: "')+9, parsedText.indexOf('"' , parsedText.indexOf('writer: "')+9) );
        const disqus = parsedText.substring(parsedText.indexOf('disqus: "')+9, parsedText.indexOf('"' , parsedText.indexOf('disqus: "')+9) );
        const thumbnail = parsedText.substring(parsedText.indexOf('thumbnail: "')+12, parsedText.indexOf('"' , parsedText.indexOf('thumbnail: "')+12) );

        const mainText = text.substr(text.indexOf("---",1)+5);
        
        index = rawMarkdownUrlArray(path).length - index; // 인덱스 순서 역순으로 변환
    
        return { index, date, title, writer, disqus, thumbnail, mainText }
    }
    
    try {
        return Promise.all(rawMarkdownUrlArray(path).map((file, i) => fetch(file).then(res => (res.text()).then(result => (sliceFrontMatter(result, i))))));
    }
    catch (err) {
        return console.error(err);
    }

}



export default fetchMarkdowns;