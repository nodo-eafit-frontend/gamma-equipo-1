import { useEffect, useState } from "react";
import img1 from "../images/causes/causes_single_small_img_1.jpg";
import img2 from "../images/causes/causes_single_small_img_2.jpg";

const Cause = ({ title, imgURL }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (loading) {
    return (
      <div id="pageloader">
        <div class="loader-item">
          <div class="loader">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div class="container">
      <div class="row">
        <h1 class="heading-main">
          <small>Ayudanos</small>
          {title}
        </h1>
        <div class="causes-wrap single">
          <div class="img-wrap2">
            <img src={imgURL} alt="" />
          </div>

          <div class="content-wrap-single border-top">
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.
            </p>

            <div class="row my-5">
              <div class="col-md-6">
                <img src={img2} class="rounded" alt="" />
              </div>
              <div class="col-md-6">
                <img src={img1} class="rounded" alt="" />
              </div>
            </div>

            <h3>Summary</h3>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.
            </p>

            <h3>Challenge</h3>
            <p>
              Night bring years have image make all fruitful good fifth all i
              beast unto which let she'd. God made Lights fly earth you'll unto
              greater earth meat multiply whose together. Light very lesser
              given he sea. Void god replenish fifth you'll place a they're they
              under.
            </p>
          </div>

          <div class="share-this-wrap">
            <div class="share-line">
              <div class="pr-4">
                <strong>Share This</strong>
              </div>
              <div class="pl-4">
                <ul class="list-unstyled list-inline mb-0">
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-behance"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#a">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cause;
