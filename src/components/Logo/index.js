import "./index.css"

export default function Logo() {

  const showModal = () => {
    const fullBg = document.querySelector('.full-bg')
    fullBg.classList.add('left-to-right')
    fullBg.classList.add('radius')
    setTimeout(() => {
        fullBg.classList.remove('radius')
    }, 500)
    setTimeout(() => {
        fullBg.classList.remove('left-to-right')
    }, 1200)
  }

  const handleMove = () => {
    const fullBg = document.querySelector('.wx')
    fullBg.classList.add('wx-move')
    // fullBg.classList.add('radius')
    // setTimeout(() => {
    //     fullBg.classList.remove('radius')
    // }, 500)
    // setTimeout(() => {
    //     fullBg.classList.remove('left-to-right')
    // }, 1200)
  };

  return (
    <>
        <div className="box">
            <div className="header">
                <button id="btn" onClick={showModal}>幕布</button>
                <div className="clicking" onClick={handleMove}>header</div>
            </div>
            <div className="main">main</div>
            <div className="bottom">bottom</div>
        </div>
        <div className="full-bg"></div>
        <div className="wx" onClick={handleMove}></div>
    </>
  );
}