const fetchReviews = async () => {
    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/reviews', {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Not found');
        } else if (response.status === 500) {
          throw new Error('Server error');
        } else {
          throw new Error('An unknown error occurred');
        }
      }
      const reviews = await response.json();
      return reviews;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createReviewItem = (review) => {
    return `
      <li class="swiper-slide reviews-items">
        <img class="reviews-img" src="${review.avatar_url}" alt="${review.author}" />
        <h3 class="review-author">${review.author}</h3>
        <p class="review-text">${review.review}</p>
      </li>
    `;
  };

const initializeSlider = () => {
  const swiper = new Swiper('.swiper', {
    //slidesPerView: 4,
    //spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    on: {
      reachEnd: () => {
        document.querySelector('.swiper-button-next').classList.add('disabled');
      },
      reachBeginning: () => {
        document.querySelector('.swiper-button-prev').classList.add('disabled');
      },
      fromEdge: () => {
        document.querySelector('.swiper-button-prev').classList.remove('disabled');
        document.querySelector('.swiper-button-next').classList.remove('disabled');
      },
    },
  });
};

const displayReviews = async () => {
  try {
    const reviews = await fetchReviews(); 
    const reviewsList = document.querySelector('.reviews-list');
    reviewsList.innerHTML = reviews.map(createReviewItem).join(''); 
    initializeSlider();
  } catch (error) {
    document.querySelector('.reviews-container').innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};

document.addEventListener('DOMContentLoaded', displayReviews);