showColor = false
function Tile()
{
  this.x = 0;
  this.y = 0;
  this.h = 0;
  this.note = null;
  this.curColor = [255,0,1]

  this.place = function(place, tileWidth)
  {
    this.x = place * tileWidth
    this.h = int(random(this.x,this.x))
  }

  this.check = function()
  {
    if ( (mouseX > this.x+10 && mouseX < this.x+tileWidth+10) && (mouseY >= this.y+height/2 && mouseY < 500))
    {
      if (mouseIsPressed)
      {
        if (!this.note.isPlaying())
        {
          this.note.play()

        }

      }

      if (showColor)
      {
        this.curColor = [this.h,1,0.8]
      }
      else {
        this.curColor = [this.h,1,1]
      }
    }
    else {
      if (showColor == false)
      {
        this.curColor = [255,0,1]
      }
      else {
        this.curColor = [this.h,1,1]
      }
    }
  }


  this.show = function()
  {
    fill(this.curColor[0], this.curColor[1], this.curColor[2])
    rect(this.x,this.y,tileWidth,tileHeight)
  }
}
