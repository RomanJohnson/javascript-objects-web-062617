// var playlist = {artistName: "songTitle"}
//
// function updatePlaylist (playlist, artistName, songTitle){
//   return Object.assign({}, {[artistName]: songTitle})
// }
// function updatePlaylist(playlist, artistName, songTitle){
//   return Object.assign({}, {[artistName]: songTitle})
var playlist = {artistName: "songTitle"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  // return Object.assign({}, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
