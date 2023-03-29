// import logo from './logo.svg';
import './App.css';
// import Logo from './components/Logo';
import logo from './static/logo.png'

function App() {
  return (
    <div className="App">
      {/* <Logo></Logo> */}
      <header className='header-container'>
        <div className='content'>
          <div className='left-content'>
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
          <div>联系我们</div>
          <div>关注我们</div>
        </div>
      </main>
      <footer className='header-container'>底部</footer>
    </div>
  );
}

export default App;
