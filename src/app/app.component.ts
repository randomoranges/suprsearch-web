import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suprsrch';
  currentScreen = 1;
  searchQuery: string = '';
  variableQuery1: string = '';
  variableQuery2: string = '';
  variableQuery3: string = '';
  variableQuery4: string = '';
  variableQuery5: string = '';
  variableQuery6: string = '';
  variableQuery7: string = '';
  movieSearchQuery: string = '';
  selectedSites: string[] = [];
  userSites: { [key: string]: boolean } = {};
  socialSelectedSites: { [key: string]: boolean } = {};
  // selectedShoppingSites: Record<string, boolean> = {};
  selectedShoppingSites: { [key: string]: boolean } = {};
  shoppingSearchQuery: string = '';
  selectedOnlineCourseSites: { [key: string]: boolean } = {};
  onlineCourseSearchQuery: string = '';
  selectedFinancialSites: { [key: string]: boolean } = {};
  financialSearchQuery: string = '';
  variables: string[] = [''];
  selectedEngine: string = 'google';


  constructor() {
  }


  showScreen(screenNumber: number) {
    this.currentScreen = screenNumber;
  }

  search() {
    let combinedQueries = [this.searchQuery];
    if (this.variableQuery1) {
      combinedQueries.push(this.searchQuery + ' ' + encodeURIComponent(this.variableQuery1));
    }
    if (this.variableQuery2) {
      combinedQueries.push(this.searchQuery + ' ' + encodeURIComponent(this.variableQuery2));
    }
    if (this.variableQuery3) {
      combinedQueries.push(this.searchQuery + ' ' + encodeURIComponent(this.variableQuery3));
    }
    if (this.variableQuery4) {
      combinedQueries.push(this.searchQuery + ' ' + encodeURIComponent(this.variableQuery4));
    }
    if (this.variableQuery5) {
      combinedQueries.push(this.searchQuery + ' ' + encodeURIComponent(this.variableQuery5));
    }
    if (this.variableQuery6) {
      combinedQueries.push(this.searchQuery + ' ' + encodeURIComponent(this.variableQuery6));
    }
    if (this.variableQuery7) {
      combinedQueries.push(this.searchQuery + ' ' + encodeURIComponent(this.variableQuery7));
    }
    // window.open('https://www.google.com/search?q=' + encodeURIComponent(this.searchQuery), '_blank');
  let engineUrl = '';
  switch (this.selectedEngine) {

  case 'google':
  engineUrl = 'https://www.google.com/search?q=';
  break;

  case 'bing':
  engineUrl = 'https://www.bing.com/search?q=';
  break;

  case 'yahoo':
  engineUrl = 'https://search.yahoo.com/search?p=';
  break;

  case 'Duck Duck Go':
  engineUrl = 'https://duckduckgo.com/?q=';
  break;

  case 'YOU':
  engineUrl = 'https://you.com/search?q=';
  break;

  case 'Dogpile':
  engineUrl = 'https://www.dogpile.com/serp?q=';
  break;


  case 'Webopedia':
  engineUrl = 'https://www.webopedia.com/?s=';
  break;

  case 'Internet Archive':
  engineUrl = 'https://archive.org/search?query=';
  break;

  case 'Twitter':
  engineUrl = 'https://twitter.com/search?q=';
  break;
}
  for (let i = 0; i < combinedQueries.length; i++) {
  let queryUrl = engineUrl + encodeURIComponent(combinedQueries[i]);
  window.open(queryUrl, '_blank');
  }

  }
  


 

  
  sites: { name: string, url: string }[] = [
    { name: 'Netflix', url: 'https://www.netflix.com/search?q=' },
    { name: 'Amazon Prime', url: 'https://www.amazon.com/s?k=' },
    { name: 'Disney+', url: 'https://www.disneyplus.com/search?q=' },
    { name: 'Hulu', url: 'https://www.hulu.com/search?q=' },
    { name: 'Apple TV', url: 'https://tv.apple.com/search?q=' },
    { name: 'HBO Max', url: 'https://www.hbomax.com/search?q=' },
    { name: 'YouTube TV', url: 'https://www.youtube.com/results?search_query=' },
    { name: 'Sony Liv', url: 'https://www.sonyliv.com/search?q=' },
    { name: 'VIU', url: 'https://www.viu.com/search?keyword=' },
    { name: 'Zee5', url: 'https://www.zee5.com/search?q=' },
    { name: 'Aha', url: 'https://www.aha.video/search?q=' },
    { name: 'IMDb', url: 'https://www.imdb.com/find?q=' },
    { name: 'Rotten Tomatoes', url: 'https://www.rottentomatoes.com/search?search=' },
    { name: 'Mubi', url: 'https://mubi.com/search?q=' },
    { name: 'Hotstar', url: 'https://www.hotstar.com/in/search?q=' },
    { name: 'Voot', url: 'https://www.voot.com/search?q=' },
    { name: 'Sun NXT', url: 'https://www.sunnxt.com/searchcontents?q=' },
    { name: 'Lionsgate', url: 'https://www.lionsgate.com/search?q=' },
    { name: 'Discovery Plus', url: 'https://www.discoveryplus.com/search?q=' },
    { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=' },
    { name: 'HBO', url: 'https://www.hbo.com/search?q=' },
  ];
  
 
  
  movieSearch() {
    let combinedQueries = [];
    for (let i = 0; i < this.sites.length; i++) {
      const site = this.sites[i];
      if (this.userSites[site.name]) {
        combinedQueries.push(site.url + encodeURIComponent(this.movieSearchQuery));
      }
    }
    for (let siteName in this.userSites) {
      if (this.userSites.hasOwnProperty(siteName) && !this.sites.find(site => site.name === siteName)) {
        if (this.userSites[siteName]) {
          combinedQueries.push('https://www.' + encodeURIComponent(siteName.toLowerCase()) + '.com/search?q=' + encodeURIComponent(this.movieSearchQuery));
        }
      }
    }
    for (let i = 0; i < combinedQueries.length; i++) {
      window.open(combinedQueries[i], '_blank');
    }
  }


  
  socialMediaSites: { name: string, url: string }[] = [
    { name: 'Facebook', url: 'https://www.facebook.com/search/top?q=' },
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/search/results/all/?keywords=' },
    { name: 'Twitter', url: 'https://twitter.com/search?q=' },
    { name: 'Reddit', url: 'https://www.reddit.com/search?q=' },
    { name: 'TikTok', url: 'https://www.tiktok.com/tag/' },
  ];
 

  searchSocialMedia() {
    let combinedQueries = [];
    for (let site of this.socialMediaSites) {
      if (this.socialSelectedSites[site.name]) {
        combinedQueries.push(site.url + encodeURIComponent(this.searchQuery));
      }
    }
    for (let query of combinedQueries) {
      window.open(query, '_blank');
    }
  }

  resetSelection() {
    this.socialSelectedSites = {};
  }


  shoppingSites: { name: string, url: string }[] = [
    { name: 'Amazon India', url: 'https://www.amazon.in/s?k=' },
    { name: 'Flipkart', url: 'https://www.flipkart.com/search?q=' },
    { name: 'Snapdeal', url: 'https://www.snapdeal.com/search?keyword=' },
    { name: 'Myntra', url: 'https://www.myntra.com/' },
    { name: 'Paytm Mall', url: 'https://paytmmall.com/shop/search?q=' },
    { name: 'Ajio', url: 'https://www.ajio.com/search/?text=' },
    { name: 'Tata Cliq', url: 'https://www.tatacliq.com/search/?searchCategory=all&text=' },
    { name: 'Shopclues', url: 'https://www.shopclues.com/search?q=' },
    { name: 'Jabong', url: 'https://www.jabong.com/find/' },
    { name: 'BigBasket', url: 'https://www.bigbasket.com/ps/?q=' },
    { name: 'Alibaba', url: 'https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=' },
    { name: 'eBay', url: 'https://www.ebay.com/sch/i.html?_nkw=' },
    { name: 'Walmart', url: 'https://www.walmart.com/search/?query=' },
    { name: 'Target', url: 'https://www.target.com/s?searchTerm=' },
    { name: 'Best Buy', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=' },
    { name: 'Apple', url: 'https://www.apple.com/us/search?query=' },
    { name: 'Macy\'s', url: 'https://www.macys.com/shop/featured/' },
    { name: 'Zara', url: 'https://www.zara.com/us/en/search?searchTerm=' },
    { name: 'ASOS', url: 'https://www.asos.com/search/?q=' },
    { name: 'H&M', url: 'https://www2.hm.com/en_in/search-results.html?q=' },
    { name: 'Shein', url: 'https://www.shein.in/search/' },
    { name: 'Firstcry', url: 'https://www.firstcry.com/search.aspx?q=' },
    { name: 'Nykaa', url: 'https://www.nykaa.com/search/result/?q=' },
    { name: '1mg', url: 'https://www.1mg.com/search/all?name=' },
    { name: 'Netmeds', url: 'https://www.netmeds.com/catalogsearch/result?q=' },
    { name: 'Apollo Pharmacy', url: 'https://www.apollopharmacy.in/catalogsearch/result/?q=' },
    { name: 'eDay', url: 'https://www.ebay.in/search?q=' },
    { name: 'Biba', url: 'https://www.biba.in/search/?searchparam=' }
  ];


  uncheckAll() {
    this.userSites = {};
  }
  
  


toggleShoppingSite(siteName: string) {
  this.selectedShoppingSites[siteName] = !this.selectedShoppingSites[siteName];
}

shoppingSearch() {
  let combinedQueries = [];
  for (let site of this.shoppingSites) {
    if (this.selectedShoppingSites[site.name]) {
      combinedQueries.push(site.url + encodeURIComponent(this.shoppingSearchQuery));
    }
  }
  for (let query of combinedQueries) {
    window.open(query, '_blank');
  }
}
  
  unshopcheckAll() {
    this.selectedShoppingSites = {};
  }



  onlineCourseSites: { name: string, url: string }[] = [
    { name: 'Udemy India', url: 'https://www.udemy.com/courses/search/?q=' },
    { name: 'Coursera India', url: 'https://www.coursera.org/courses?query=' },
    { name: 'Simplilearn', url: 'https://www.simplilearn.com/search?q=' },
    { name: 'edX', url: 'https://www.edx.org/search?q=' },
    { name: 'UpGrad', url: 'https://www.upgrad.com/courses/all-courses/' },
    { name: 'Great Learning', url: 'https://www.greatlearning.in/courses' },
    { name: 'Byju\'s', url: 'https://byjus.com/all-courses/' },
    { name: 'Internshala', url: 'https://trainings.internshala.com/search?category=all-training&query=' },
    { name: 'Codecademy India', url: 'https://www.codecademy.com/search?query=' },
    { name: 'GreyAtom', url: 'https://greyatom.com/courses' },
    { name: 'LinkedIn Learning India', url: 'https://www.linkedin.com/learning/search?keywords=' },
    { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/search?keywords=' },
    { name: 'Codecademy', url: 'https://www.codecademy.com/catalog/all?query=' },
    { name: 'Skillshare', url: 'https://www.skillshare.com/browse/' },
    { name: 'FutureLearn', url: 'https://www.futurelearn.com/courses/search?q=' },
    { name: 'Pluralsight', url: 'https://www.pluralsight.com/search?q=' },
    { name: 'Khan Academy', url: 'https://www.khanacademy.org/search?page_search_query=' },
    { name: 'Treehouse', url: 'https://teamtreehouse.com/library?q=' },
    { name: 'Udacity', url: 'https://www.udacity.com/courses/all?search=' },
    { name: 'TED-Ed', url: 'https://ed.ted.com/search?utf8=%E2%9C%93&qs=&query=' },
    { name: 'Alison', url: 'https://alison.com/courses?query=' },
    { name: 'Duolingo', url: 'https://www.duolingo.com/search?query=' },
  ];


  userOnlineCourseSites() {
    let combinedQueries = [];
    for (let site of this.onlineCourseSites) {
      if (this.selectedOnlineCourseSites[site.name]) {
        combinedQueries.push(site.url + encodeURIComponent(this.onlineCourseSearchQuery));
      }
    }
    for (let query of combinedQueries) {
      window.open(query, '_blank');
    }
  }

  uncoursecheckAll() {
    this.selectedOnlineCourseSites = {};
  }



  travelSites: { name: string, url: string }[] = [
    { name: 'MakeMyTrip-hotels', url: 'https://www.makemytrip.com/hotels/hotel-listing/?'},
    { name: 'Yatra-flights', url: 'https://www.yatra.com/flights/' },
    { name: 'Yatra-hotels', url: 'https://www.yatra.com/hotels/hotel-search/dom/search?city.code=' },
    { name: 'Cleartrip-flights', url: 'https://www.cleartrip.com/flights/results?from=' },
    { name: 'Cleartrip-hotels', url: 'https://www.cleartrip.com/hotels/results?city=' },
    { name: 'Goibibo-hotels', url: 'https://www.goibibo.com/hotels/find-hotels-in-' },
    { name: 'ixigo', url: 'https://www.ixigo.com/' },
    { name: 'Expedia-hotels', url: 'https://www.expedia.co.in/Hotel-Search?destination=' }, 
    { name: 'Booking.com india', url: 'https://www.booking.com/searchresults.html?ss=' },
    { name: 'TripAdvisor india', url: 'https://www.tripadvisor.in/Search?q=goa' },
    { name: 'OYO', url: 'https://www.oyorooms.com/search?location=' },
    { name: 'Airbnb', url: 'https://www.airbnb.com/' },
    { name: 'Agoda', url: 'https://www.agoda.com/search?' },
    { name: 'Kayak-hotels', url: 'https://www.kayak.co.in/hotels/' },
    { name: 'Kayak-flights', url: 'https://www.kayak.co.in/flights/' },
    { name: 'Skyscanner-hotels', url: 'https://www.skyscanner.co.in/hotels?' },
    { name: 'Skyscanner-flights', url: 'https://www.skyscanner.co.in/' },
    { name: 'Hotels.com', url: 'https://www.hotels.com/Hotel-Search?destination=' }
  ];
  selectedTravelSites: { [key: string]: boolean } = {};
  travelSearchQuery: string = '';
  
  userTravelSites() {
    let combinedQueries = [];
    for (let site of this.travelSites) {
      if (this.selectedTravelSites[site.name]) {
        combinedQueries.push(site.url + encodeURIComponent(this.travelSearchQuery));
      }
    }
    for (let query of combinedQueries) {
      window.open(query, '_blank');
    }
  }
  
  traveluncheckAll() {
    this.selectedTravelSites = {};
  }


  // financialSites: { name: string, url: string }[] = [
  //   { name: 'Moneycontrol', url: 'https://www.moneycontrol.com/india/stockpricequote/' },
  //   { name: 'Screener.in', url: 'https://www.screener.in/' },
  //   { name: 'Trade Brains Portal', url: 'https://portal.tradebrains.in/' },
  //   { name: 'Trendlyne', url: 'https://trendlyne.com/equity/' },
  //   { name: 'Tickertape', url: 'https://www.tickertape.in/stocks/' },
  //   { name: 'Investing.com', url: 'https://in.investing.com/search/?q=' },
  //   { name: 'Finology Ticker', url: 'https://ticker.finology.in/' },
  //   { name: 'StockEdge', url: 'https://www.stockedge.com/' },
  //   { name: 'The Motley Fool', url: 'https://www.fool.com/' },
  //   { name: 'Morningstar', url: 'https://www.morningstar.in/' },
  //   { name: 'Tradingview', url: 'https://in.tradingview.com/' },
  //   { name: 'Zacks Investment Research', url: 'https://www.zacks.com/' },
  //   { name: 'CNBC', url: 'https://www.cnbc.com/' }
  // ];

  // userFinancialSites() {
  //   let combinedQueries = [];
  //   for (let site of this.financialSites) {
  //     if (this.selectedFinancialSites[site.name]) {
  //       combinedQueries.push(site.url + encodeURIComponent(this.financialSearchQuery));
  //     }
  //   }
  //   for (let query of combinedQueries) {
  //     window.open(query, '_blank');
  //   }
  // }

  // financeuncheckAll() {
  //   this.selectedFinancialSites = {};
  // }


  closeAllTabs() {
    window.open('', '_self', '');
    window.close();
  }
}
