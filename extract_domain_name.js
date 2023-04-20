// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  let substr = "";
  if ((/^(w)/).test(url)) {
    substr = url.substring(4);
  } else if ((/^(https)/).test(url)) {
    substr = url.substring(8);
  } else  {
    substr = url.substring(7);
  }
  const solution = substr.split('.');
  return(solution[0]);
}

domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
