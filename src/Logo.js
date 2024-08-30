import './logo.css';

function Logo() {
  return (
    <div className="page">
      <div className='logo'>
        <h1>HTML<span className='and-symbol'>&</span>CSS</h1>
        <p>design and build websites</p>
        <div class="diamond">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
