var tileList = [];
tileWidth = 65
tileHeight = 250

var noteLists = [];
function setup()
{
  for (var n = 0; n < 13; n++)
  {
    note = loadSound('audio/'+n+'.wav')
    noteLists[n] = note
  }
  for (var i =0; i < 18; i++)
  {
    newTile = new Tile();
    newTile.place(i,tileWidth);
    newTile.note = noteLists[i%13]
    tileList[i] = newTile;
  }
  createCanvas(1190,500)
  colorMode(HSB,width,1,1)
  background(0,0,0)

  changeSet = createButton('Show/hide colors')
  changeSet.position(width/2,550)
  changeSet.mousePressed(change)

}
function drawBlack()
{
  fill(0,0,0)
  for (var tilenum = 1; tilenum < tileList.length; tilenum++)
  {
    curNum = tilenum%7
    fill(0,0,0)
    if (curNum != 3 && curNum != 0)
    {
      rect(tilenum*tileWidth-15,0,30,tileHeight/2)
    }
  }

}
function change()
{
  showColor = !showColor
}
function draw()
{
  translate(10,height/2);
  //fill(255);
  for (var i = 0;i < tileList.length;i++)
  {
    tile = tileList[i]
    tile.check()
    tile.show()
  }
  drawBlack()
}
