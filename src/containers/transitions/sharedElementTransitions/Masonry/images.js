const images = [
  require('../../../../assets/images/masonry/Cfw87359UT.jpeg'),
  require('../../../../assets/images/masonry/a848dHxA4e.jpeg'),
  require('../../../../assets/images/masonry/AdGXmD1CH6.jpeg'),
  require('../../../../assets/images/masonry/5Gi8kova3k.jpeg'),
  require('../../../../assets/images/masonry/ri90ueind7.jpeg'),
  require('../../../../assets/images/masonry/kVN0FryOZk.jpeg'),
  require('../../../../assets/images/masonry/v8KLi2f0Tr.jpeg'),
  require('../../../../assets/images/masonry/xU42hx19BB.jpeg'),
  require('../../../../assets/images/masonry/61mpAVRV73.jpeg'),
  require('../../../../assets/images/masonry/pqgylg80SD.jpeg'),
  require('../../../../assets/images/masonry/37r6Cqp1B8.jpeg'),
  require('../../../../assets/images/masonry/N30E32431C.jpeg'),
  require('../../../../assets/images/masonry/rVOcz7rd0z.jpeg'),
  require('../../../../assets/images/masonry/A4g0lZ33Z8.jpeg'),
  require('../../../../assets/images/masonry/j51Pva1P8L.jpeg'),
  require('../../../../assets/images/masonry/158xD4xbeh.jpeg'),
];

function randomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

export default [
  {
    key: 1,
    images: [[{
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }], [{
      weight: 1,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }]],
  },
  {
    key: 2,
    images: [[{
      weight: 1,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }], [{
      weight: 3,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }]],
  },
  {
    key: 3,
    images: [[{
      weight: 1,
      source: randomImage(),
    }, {
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 2,
      source: randomImage(),
    }], [{
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }]],
  }
];
