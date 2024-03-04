import './App.css';

function App() {
  return (
    <body>
      <header>
        <div className="container flex pop">
          <a href="./Apps.js" className="logo">
            <span>- Champions</span> RODO -
          </a>
          <nav>
            <ul id="item-box"className="header_memu">
              <li><a href="#training">種目管理</a></li>
              <li><a href="#food">食事管理</a></li>
              <li><a href="#movie">動画</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="container">
          <div className="hero_inner">
            <p className="pop">"When you hit a wall, that's when the real starting line emerges."</p>
            <h1>壁にぶち当たったときこそ真のスタートライン</h1>
          </div>
          </section>

          <section id="training" className="container">
            <div className="heading">Training</div>
            <h2 className="title pop">Training</h2>
            <h3>何度も積み重ねた先に描いたビジョンが現実になるのをあなたは知っている</h3>
            <div className="flex">
              <div className="column-2">
                <h4>- 日々のメニューを記録しよう! -</h4>
                <a href="" target="_blank" className="btn">MORE</a>
              </div>
            </div>
          </section>


      </main>


      </body>
  );
}

export default App;
