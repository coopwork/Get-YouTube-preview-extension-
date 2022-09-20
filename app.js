  const 
    playerSettings = document.querySelector('.ytp-right-controls'),
    integration = document.createElement("button");

  integration.addEventListener('click', ()=>{
    // const preview_URL = document.querySelector('link[rel="image_src"]').getAttribute('href');
    // window.location.reload();
    // window.open(window.location.href).window.location(document.querySelector('link[rel="image_src"]').getAttribute('href'));
    window.open(document.querySelector('link[rel="image_src"]').getAttribute('href'));
  })

  console.log(window.location.href);

  setInterval(() => {
    playerSettings.prepend(integration);
    
  }, 1000);
  playerSettings.prepend(integration);
  integration.classList = 'ytp-button';
  integration.setAttribute('aria-haspopup', 'true');
  integration.setAttribute('aria-label', 'Get preview');
  integration.setAttribute('data-title-no-tooltip', 'Get preview');
  integration.setAttribute('title', 'Get preview');
  integration.setAttribute('style', '');
  // integration.setAttribute('onClick', `window.open("${preview_URL}")`);
  integration.innerHTML=`

  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.523 19.5757C18.523 19.1262 18.3897 18.6868 18.14 18.313C17.8902 17.9393 17.5353 17.648 17.12 17.476C16.7047 17.304 16.2477 17.259 15.8069 17.3466C15.366 17.4343 14.9611 17.6508 14.6432 17.9686C14.3254 18.2865 14.1089 18.6915 14.0212 19.1323C13.9335 19.5732 13.9785 20.0302 14.1505 20.4454C14.3226 20.8607 14.6139 21.2157 14.9876 21.4654C15.3614 21.7151 15.8008 21.8484 16.2503 21.8484C16.853 21.8484 17.4311 21.609 17.8573 21.1828C18.2835 20.7565 18.523 20.1785 18.523 19.5757ZM15.0381 19.5757C15.0381 19.336 15.1092 19.1016 15.2424 18.9023C15.3756 18.703 15.5649 18.5476 15.7864 18.4559C16.0079 18.3641 16.2516 18.3401 16.4867 18.3869C16.7219 18.4336 16.9378 18.5491 17.1074 18.7186C17.2769 18.8881 17.3923 19.1041 17.4391 19.3392C17.4859 19.5744 17.4619 19.8181 17.3701 20.0396C17.2784 20.2611 17.123 20.4504 16.9237 20.5835C16.7244 20.7167 16.49 20.7878 16.2503 20.7878C15.9288 20.7878 15.6205 20.6601 15.3932 20.4328C15.1659 20.2055 15.0381 19.8972 15.0381 19.5757Z" fill="white"/>
  <path d="M22.6515 26.9773L19.6212 23.947C19.4793 23.8059 19.2873 23.7267 19.0872 23.7267C18.887 23.7267 18.695 23.8059 18.5531 23.947L13.9697 28.591V30.7349L19.1137 25.591L21.6061 28.0455L18.7652 30.8864H20.8485L27.25 24.4849L32.2122 29.4243V27.288L27.8106 22.8864C27.6687 22.7453 27.4767 22.6661 27.2765 22.6661C27.0764 22.6661 26.8844 22.7453 26.7425 22.8864L22.6515 26.9773Z" fill="white"/>
  <path d="M33.7273 21.2576V33.9697H12.5152V15.7879H26.5303C26.5323 15.2755 26.6036 14.7659 26.7424 14.2727H12.5152C12.1133 14.2727 11.7279 14.4323 11.4438 14.7165C11.1596 15.0006 11 15.386 11 15.7879V33.9697C11 34.3715 11.1596 34.7569 11.4438 35.041C11.7279 35.3252 12.1133 35.4848 12.5152 35.4848H33.7273C34.1291 35.4848 34.5145 35.3252 34.7986 35.041C35.0828 34.7569 35.2424 34.3715 35.2424 33.9697V20.5909C34.7729 20.8864 34.2623 21.111 33.7273 21.2576Z" fill="white"/>
  <path d="M32.2122 19.5758C34.3042 19.5758 36.0001 17.8799 36.0001 15.7879C36.0001 13.6959 34.3042 12 32.2122 12C30.1202 12 28.4243 13.6959 28.4243 15.7879C28.4243 17.8799 30.1202 19.5758 32.2122 19.5758Z" fill="white"/>
  </svg>
  
  `;