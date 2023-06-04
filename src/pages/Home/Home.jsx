import React from "react";
import style from "./Home.css";
function Home() {
  return (
    <>
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'
          static.nike.com
          cdn.jsdelivr.net
          fonts.googleapis.com
          cdnjs.cloudflare.com
          fonts.gstatic.com
          mir-s3-cdn-cf.behance.net
          images.pexels.com
          "
      />
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Hyper Shop - Sneakers for Sneakerheads</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="all,follow" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossorigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"
          ></script>
          <link
            rel="stylesheet"
            href="/vendor/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="/vendor/font-awesome/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700"
          />
          <link
            rel="stylesheet"
            href="/vendor/owl.carousel/assets/owl.carousel.css"
          />
          <link
            rel="stylesheet"
            href="/vendor/owl.carousel/assets/owl.theme.default.css"
          />
          <link
            rel="stylesheet"
            href="/css/style.default.css"
            id="theme-stylesheet"
          />
          <link rel="stylesheet" href="/css/custom.css" />
          <link rel="stylesheet" href="/css/global.css" />
          <link rel="shortcut icon" href="/favicon.png" />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
            integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
            crossorigin="anonymous"
          ></script>

          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body>
          <header class="header mb-5 header-main">
            <nav class="navbar navbar-expand-lg">
              <div class="container">
                <a href="/" class="navbar-brand home">
                  <img
                    src="/img/newlogo.jpg"
                    alt="Hyper logo"
                    class="d-none d-md-inline-block"
                  />
                  <img
                    src="/img/logo-small.png"
                    alt="Hyper logo"
                    class="d-inline-block d-md-none"
                  />
                  <span class="sr-only">Hyper - Đi tới trang chủ</span>
                </a>
                <div class="navbar-buttons">
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    class="btn btn-outline-secondary navbar-toggler"
                  >
                    <span class="sr-only">Toggle navigation</span>
                    <i class="fa fa-align-justify"></i>
                  </button>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#search"
                    class="btn btn-outline-secondary navbar-toggler"
                  >
                    <span class="sr-only">Toggle search</span>
                    <i class="fa fa-search"></i>
                  </button>
                  <a
                    href="/cart"
                    class="btn btn-outline-secondary navbar-toggler"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </div>
                <div id="navigation" class="collapse navbar-collapse">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <a href="/" class="nav-link">
                        Trang chủ
                      </a>
                    </li>
                    <li class="nav-item dropdown menu-large">
                      <a
                        href="/products"
                        data-hover="dropdown"
                        data-delay="200"
                        class="dropdown-toggle nav-link"
                      >
                        Sản phẩm<b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu megamenu">
                        <li>
                          <div class="row">
                            <div class="col-md-6 col-lg-3">
                              <h5>Loại giày</h5>
                              <ul class="list-unstyled mb-3">
                                <li class="nav-item">
                                  <a
                                    href="/products?category=basketball"
                                    class="nav-link"
                                  >
                                    basketball
                                  </a>
                                </li>

                                <li class="nav-item">
                                  <a
                                    href="/products?category=casual"
                                    class="nav-link"
                                  >
                                    casual
                                  </a>
                                </li>

                                <li class="nav-item">
                                  <a
                                    href="/products?category=running"
                                    class="nav-link"
                                  >
                                    running
                                  </a>
                                </li>

                                <li class="nav-item">
                                  <a
                                    href="/products?category=football"
                                    class="nav-link"
                                  >
                                    football
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-6 col-lg-3">
                              <h5>Thương hiệu</h5>
                              <ul class="list-unstyled mb-3">
                                <li class="nav-item">
                                  <a
                                    href="/products?brand=Nike"
                                    class="nav-link"
                                  >
                                    Nike
                                  </a>
                                </li>

                                <li class="nav-item">
                                  <a
                                    href="/products?brand=Adidas"
                                    class="nav-link"
                                  >
                                    Adidas
                                  </a>
                                </li>

                                <li class="nav-item">
                                  <a
                                    href="/products?brand=Balenciaga"
                                    class="nav-link"
                                  >
                                    Balenciaga
                                  </a>
                                </li>

                                <li class="nav-item">
                                  <a
                                    href="/products?brand=Other"
                                    class="nav-link"
                                  >
                                    Other
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li class="nav-item">
                      <a href="/user/profile" class="nav-link">
                        Hồ sơ
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="/order" class="nav-link">
                        Đơn hàng của tôi
                      </a>
                    </li>
                  </ul>
                  <div class="navbar-buttons d-flex justify-content-end">
                    <div
                      id="search-not-mobile"
                      class="navbar-collapse collapse"
                    ></div>
                    <a
                      data-toggle="collapse"
                      href="#search"
                      class="btn navbar-btn btn-primary d-none d-lg-inline-block"
                    >
                      <span class="sr-only">Toggle search</span>
                      <i class="fa fa-search"></i>
                    </a>
                    <div
                      id="basket-overview"
                      class="navbar-collapse collapse d-none d-lg-block"
                    >
                      <a href="/auth/signin" class="btn btn-primary navbar-btn">
                        <i class="fa fa-user"></i>
                        <span>Đăng nhập</span>
                      </a>

                      <a href="/auth/signup" class="btn btn-primary navbar-btn">
                        <i class="fa fa-key"></i>
                        <span>Đăng ký</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div id="search" class="collapse">
              <div class="container search-form-container">
                <form
                  action="/products"
                  role="search"
                  class="ml-auto search-form"
                  id="search-form"
                >
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      class="form-control search"
                      name="name"
                    />
                    <div class="input-group-append">
                      <button
                        type="submit"
                        form="search-form"
                        class="btn btn-primary search-button"
                      >
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </header>

          <div id="all">
            <div id="content">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div id="main-slider" class="owl-carousel owl-theme">
                      <div class="item">
                        <img
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a5777e156114087.636155615221c.jpg"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="item">
                        <img
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e36d0a156114087.636155615430e.jpg"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="item">
                        <img
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9ef300156114087.63615561564b7.jpg"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="advantages">
                <div class="container">
                  <div class="row mb-4">
                    <div class="col-md-4">
                      <div class="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                        <div class="icon">
                          <i class="fa fa-heart"></i>
                        </div>
                        <h3>
                          <a href="#">Chúng tôi tự hào về sản phẩm của mình</a>
                        </h3>
                        <p class="mb-0">
                          Sản phẩm của cửa hàng luôn đạt chất lượng cao nhất có
                          thể.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                        <div class="icon">
                          <i class="fa fa-tags"></i>
                        </div>
                        <h3>
                          <a href="#">Giá thành tốt nhất</a>
                        </h3>
                        <p class="mb-0">
                          Các sản phẩm ở cửa hàng luôn được bán với giá thành
                          tốt nhất có thể.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                        <div class="icon">
                          <i class="fa fa-thumbs-up"></i>
                        </div>
                        <h3>
                          <a href="#">Đảm bảo mức độ hài lòng của khách hàng</a>
                        </h3>
                        <p class="mb-0">
                          Trung tâm hỗ trợ khách hàng tốt nhất để giúp khác hàng
                          có được sự hài lòng tốt nhất.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="hot">
            <div class="box py-4">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="mb-0">Sản pẩm được bán chạy</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="product-slider owl-carousel owl-theme">
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371bb4b7ee693729df94464">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/04421d64-7214-4718-ba73-93e6d1447bac/air-force-1-mid-07-shoe-9S2mB4.png"
                              alt="Nike Air Force 1 High"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371bb4b7ee693729df94464"
                          style={{ textDecoration: "none" }}
                        >
                          Nike Air Force 1 High
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>199.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371bbe1cf3df1d1d04b7086">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/94f76106-1216-47bb-bf35-f294375a5743/jr-zoom-mercurial-superfly-9-academy-cr7-ic-younger-older-indoor-court-football-shoes-9Ds9wp.png"
                              alt="Adidas Running K98"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371bbe1cf3df1d1d04b7086"
                          style={{ textDecoration: "none" }}
                        >
                          Adidas Running K98
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>1.000.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371d74d89112013f91f1d32">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6dd45492-c258-4483-9062-82a963ba646a/air-jordan-1-elevate-high-shoes-rKPNHR.png"
                              alt="Nike Air Max 97"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371d74d89112013f91f1d32"
                          style={{ textDecoration: "none" }}
                        >
                          Nike Air Max 97
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>998.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/638375f549cc80bf6f82181b">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f89b2b4e-a7e2-4863-a0c4-2c3133f72d1d/air-force-1-mid-react-shoes-Hbs6fH.png"
                              alt="Nike Air Force 1 Mid React"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/638375f549cc80bf6f82181b"
                          style={{ textDecoration: "none" }}
                        >
                          Nike Air Force 1 Mid React
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>1.000.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371c348cf3df1d1d04b714a">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb958f53-6671-4fe4-b83d-7911731818c0/air-trainer-1-sp-shoes-6QJXK2.png"
                              alt="Balenciaga bambas XS"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371c348cf3df1d1d04b714a"
                          style={{ textDecoration: "none" }}
                        >
                          Balenciaga bambas XS
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>950.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371bccecf3df1d1d04b708a">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e8138e2-acf1-4c72-afb4-15ded5bd40aa/jordan-delta-3-low-shoes-fQrm6Q.png"
                              alt="Adidas super star"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371bccecf3df1d1d04b708a"
                          style={{ textDecoration: "none" }}
                        >
                          Adidas super star
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>1.150.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371bb58cf3df1d1d04b7082">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b87f1776-d1bc-4a5f-be4e-e9b39c8773f8/zoom-mercurial-vapor-15-academy-tf-football-shoes-L8JgP4.png"
                              alt="Nike 28530"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371bb58cf3df1d1d04b7082"
                          style={{ textDecoration: "none" }}
                        >
                          Nike 28530
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>750.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371c28acf3df1d1d04b7142">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/abd51fdf-a7b7-4a2f-aae9-a5b0a81b31ed/air-jordan-xxxvi-low-luka-pf-basketball-shoes-zNLHjc.png"
                              alt="Custom Adidas Flex"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371c28acf3df1d1d04b7142"
                          style={{ textDecoration: "none" }}
                        >
                          Custom Adidas Flex
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>999.000 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371c100cf3df1d1d04b7105">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5425bb1-1438-44c1-975d-20ddc0dbb31b/jordan-delta-3-low-shoes-fQrm6Q.png"
                              alt="Adidas super star"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371c100cf3df1d1d04b7105"
                          style={{ textDecoration: "none" }}
                        >
                          Adidas super star
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>571.900 VND
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="back">
                          <a href="/products/6371c3facf3df1d1d04b7184">
                            <img
                              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70469852-3b98-4812-bb0c-a152fa52480f/air-jordan-5-retro-green-bean-shoes-KNZDfn.png"
                              alt="Black leather shoes"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <h3>
                        <a
                          href="/products/6371c3facf3df1d1d04b7184"
                          style={{ textDecoration: "none" }}
                        >
                          Black leather shoes
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>750.000 VND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box text-center">
            <div class="container">
              <div class="col-md-12">
                <h3 class="text-uppercase">Từ những blog của cửa hàng</h3>
                <p class="lead mb-0">
                  Thế giới thời trang có gì mới?{" "}
                  <a href="/blog.html">Tham khảo blog của cửa hàng</a>
                </p>
              </div>
            </div>
          </div>
          <div id="footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <h4 class="mb-3">Trang</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/">Trang chủ</a>
                    </li>
                    <li>
                      <a href="/products">Sản phẩm</a>
                    </li>
                    <li>
                      <a href="/cart">Giỏ hàng</a>
                    </li>
                    <li>
                      <a href="contact.html">Liên hệ chúng tôi</a>
                    </li>
                  </ul>
                  <hr />
                  <h4 class="mb-3">Người dùng</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                      >
                        Đăng nhập
                      </a>
                    </li>
                    <li>
                      <a href="register.html">Đăng kí</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                  <h4 class="mb-3">Top những sản phẩm</h4>
                  <h5>Thương hiệu</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/products?brand=Nike">Nike</a>
                    </li>
                    <li>
                      <a href="/products?brand=Adidas">Adidas</a>
                    </li>
                    <li>
                      <a href="/products?brand=Balenciaga">Balenciaga</a>
                    </li>
                  </ul>
                  <h5>Loại giày</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/products?category=football">Bóng đá</a>
                    </li>
                    <li>
                      <a href="/products?category=basketball">Bóng rổ</a>
                    </li>
                    <li>
                      <a href="/products?category=skateboard">Trượt ván</a>
                    </li>
                    <li>
                      <a href="/products?category=casual">Thông dụng</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                  <h4 class="mb-3">Chi nhánh của cửa hàng</h4>
                  <p>
                    <strong>Hyper Ltd.</strong>
                    <br />
                    Thủ Đức
                    <br />
                    TP.Hồ Chí Minh
                    <br />
                    <br />
                    <strong>Việt Nam</strong>
                  </p>
                  <a href="/">Đi đến trang liên hệ cửa hàng</a>
                  <hr class="d-block d-md-none" />
                </div>
                <div class="col-lg-3 col-md-6">
                  <h4 class="mb-3">Những thông tin mới nhất</h4>
                  <p class="text-muted">
                    Thế giới thời trang không ngừng phát triển với những mẫu
                    giày mới và đẹp được tung ra nhiều trên thị trường thế giới.
                  </p>

                  <hr />
                  <h4 class="mb-3">Liên lạc</h4>
                  <p class="social">
                    <a href="#" class="facebook external">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#" class="twitter external">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#" class="instagram external">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#" class="gplus external">
                      <i class="fa fa-google-plus"></i>
                    </a>
                    <a href="#" class="email external">
                      <i class="fa fa-envelope"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="copyright">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 mb-2 mb-lg-0">
                  <p class="text-center text-lg-left">©2022 Hyper Team</p>
                </div>
                <div class="col-lg-6">
                  <p class="text-center text-lg-right">
                    Template design by
                    <a href="https://bootstrapious.com/">Bootstrapious</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <script src="/vendor/jquery/jquery.min.js"></script>
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/vendor/jquery.cookie/jquery.cookie.js"></script>
          <script src="/vendor/owl.carousel/owl.carousel.min.js"></script>
          <script src="/vendor/owl.carousel2.thumbs/owl.carousel2.thumbs.js"></script>
          <script src="/js/front.js"></script>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
            integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    </>
  );
}
export default Home;
