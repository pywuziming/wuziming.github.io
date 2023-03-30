import './App.css';
import logo from './static/logo.png'
import wxImg from './static/wxImg.png'

function App() {

  const showPageUp = () => {
    const fullBg = document.querySelector('.full-bg')
    fullBg.classList.add('left-to-right')
    fullBg.classList.add('radius')
    setTimeout(() => {
        fullBg.classList.remove('radius')
    }, 500)
    setTimeout(() => {
        fullBg.classList.remove('left-to-right')
        fullBg.classList.add('no-display')
    }, 1000)
  }

  const handleMove = () => {
    const fullBg = document.querySelector('.wx')
    fullBg.classList.add('wx-move')
  };

  return (
    <>
      <div className="App">
        <header className='header-container'>
          <div className='content'>
            <div className='left-content' onClick={showPageUp}>
              <img alt='' src={logo} className='img'/>
            </div>
            <div className='right-content'>
              <div className='txt-btn click-btn'>案例</div>
              <div className='txt-btn'>关于我们</div>
              <div className='txt-btn'>EN</div>
            </div>
          </div>
        </header>
        <main className='main-container'>
          <div className='title'>灵境至维</div>
          <div className='txt-ENglish'>YOU CAN EXPECT MORE</div>
          <div className='txt-desc'>
            <div>社交网络传播在内的多样化功能，这些虚拟空间可以相互连通，构建连接的虚拟社区和世界。</div>
            <div>灵境至维是为品牌和艺术活动打造连接和开放的虚拟空间的平台。</div>
            <div>每一个虚拟空间都可以呈现包含开放世界、在线直播、高保真3D体验、互动视频、游戏化人物形象和社交网络传播在内的多样化功能，这些虚拟空间可以相互连通，构建连接的虚拟社区和世界。</div>
          </div>
          <div className='btn-container'>
            <div className='btn' onClick={handleMove}>联系我们</div>
            <div className='btn'>关注我们</div>
          </div>
        </main>
      </div>
      <div className="full-bg"></div>
      <div className="wx" onClick={handleMove}>
        <img alt='' src={wxImg} className="wx-img"/>
      </div>
    </>
  );
}

export default App;
