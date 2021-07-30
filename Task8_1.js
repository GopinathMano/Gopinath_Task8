https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


class movie {
  constructor(Title, Studio, Rating = "PG") {
    this.Title = Title;
    this.Studio = Studio;
    this.Rating = Rating;
  }
  //   setTitle(x) {
  //     this.Title = x;
  //   }
  getTitle() {
    console.log("the title of the movie is  " + this.Title);
  }
  getStudio() {
    console.log(" the studio that made the movie  " + this.Studio);
  }
  getRating() {
    console.log(" the Rating for the movie is  " + this.Rating);
  }
}

var dd = new movie("puli", "AAA");

// dd.setTitle("Master");
dd.getTitle();
dd.getStudio();
dd.getRating();
