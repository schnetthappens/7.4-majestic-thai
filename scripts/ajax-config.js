
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'stTnWeOXJLyY0wmmsHcxTxJWWVwU4P1rE9I4ik09';
    options.headers['X-Parse-REST-API-Key'] = 'qkn2FEWVYKnFuiMC5vH1V80Tzchag4VWpb9TzAL6';
  }
});
