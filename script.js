

document.addEventListener('onclick', function () {

    page('/', home);
    page('/about', about);
    page('/blogs', blogs);
    page('/contact', contact);

   
    page();


    function home() {
        document.getElementsByClassName('container-fluid').innerHTML = `
            <div class="hero">
                <div class="row">
                    <img src="./assets/download.jfif" alt="Image-background" class="background" />
                </div>
            </div>
            <div class="card mb-12 About" id="about-img">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src="./assets/about.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title" id="text-about1">About SBM limited</h5>
                            <p class="card-text" id="text-about2">information technology (IT) is a broad professional category covering functions including building communications networks, safeguarding data and information, and troubleshooting computer problems.is a broad professional category covering functions including building communications networks, safeguarding data and information, and troubleshooting computer problems</p>
                            <p class="card-text" id="text-about3"><small class="text-body-secondary">SBM LIMITED PVT LTD</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function about() {
        document.querySelector('main').innerHTML = `
            <div class="card mb-12 About" id="about-img">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="./assets/about.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title" id="text-about1">About SBM limited</h5>
              <p class="card-text" id="text-about2">information technology (IT) is a broad professional category covering functions including building communications networks, safeguarding data and information, and troubleshooting computer problems.is a broad professional category covering functions including building communications networks, safeguarding data and information, and troubleshooting computer problems</p>
              <p class="card-text" id="text-about3"><small class="text-body-secondary">SBM LIMITED PVT LTD</small></p>
            </div>
          </div>
        </div>
      </div>
        
        `;
    }

    function blogs() {
        document.querySelector('main').innerHTML = `
             
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success " id="btnn" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    <div class="hero">
        <div class="row">
            <img src="./assets/download.jfif" alt="Image-background" class="background" />
        </div>
    </div>
   
    <div class="card mb-12 About" id="about-img">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="./assets/about.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title" id="text-about1">About SBM limited</h5>
              <p class="card-text" id="text-about2">information technology (IT) is a broad professional category covering functions including building communications networks, safeguarding data and information, and troubleshooting computer problems.is a broad professional category covering functions including building communications networks, safeguarding data and information, and troubleshooting computer problems</p>
              <p class="card-text" id="text-about3"><small class="text-body-secondary">SBM LIMITED PVT LTD</small></p>
            </div>
          </div>
        </div>
      </div>

    <div class="card-group">
        <div class="card"id="card1">
          <img src="./assets/blogs4.jpeg" class="card-img-top" alt="..." style="height: 800">
        
          <div class="card-body">
            <h5 class="card-title" id="card-title1">Team Work</h5>
            <p class="card-text" id="card-text1">If you're making a simple introduction, let your reader know that you're simply introducing yourself and saying hello. If you're seeking investors, explain why your company is profitable and worth investing in. If you're trying to form a partnership, provide an outline of your idea for the partnership.</p>
            <p class="card-text"id="last"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card" id="card2">
          <img src="./assets/blogs1.jpg" class="card-img-top" alt="..." id="img2">
          <div class="card-body">
            <h5 class="card-title" id="card-title2">SBM limited</h5>
            <p class="card-text" id="card-text2">If you're making a simple introduction, let your reader know that you're simply introducing yourself and saying hello. If you're seeking investors, explain why your company is profitable and worth investing in. If you're trying to form a partnership, provide an outline of your idea for the partnership.</p>
            <p class="card-text " id="last1"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card"id="card">
          <img src="./assets/contact.webp" class="card-img-top" alt="...">
    
          <div class="card-body">
            <h5 class="card-title" id="card-title3"> About companny</h5>
            <p class="card-text" id="card-text3">If you're making a simple introduction, let your reader know that you're simply introducing yourself and saying hello. If you're seeking investors, explain why your company is profitable and worth investing in. If you're trying to form a partnership, provide an outline of your idea for the partnership.</p>
            <p class="card-text"id="last2"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
        
        `;
    }

    function contact() {
        document.querySelector('main').innerHTML = `
            <main class="contact-page">
                <div class="contact-container">
                    <div class="col-6">
                        <div class="contact-info">
                            <img src="./assets/test.png" alt="Contact Us" id="img-cont">
                            <form id="userForm" action="./process.php" method="POST">
                                <div class="form-group"><br>
                                    <label for="name" class="label1">Name:</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group"><br>
                                    <label for="email"class="label1" >Email:</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                <div class="form-group" ><br>
                                    <label for="message"class="label1">Message:</label>
                                    <textarea id="message" name="message" required></textarea>
                                </div>
                                <button type="submit"class="label1" id="mess-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        `;
    }
});
