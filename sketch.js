snake = []
direction = 'N'
poma = {
    x : Math.floor(Math.random() * 38) * 20 + 20,
    y : Math.floor(Math.random() * 18) * 20 + 20
}
score = 0
playing = true

function setup() {
  createCanvas(800, 400);
	for(i=0; i<3; i++){
		snake.push({
			x:400,
			y:180+20*i
		})
	}
	frameRate(5)
}

function draw() {
  if(snake[0].x<=0 || snake[0].x>=width || snake[0].y<=0 || snake[0].y>=height )playing=false
  if (playing){
    background(50);
  	switch(direction) {
      case 'N':
  			snake.unshift({
  				x:snake[0].x,
  				y:snake[0].y-20
  			})
  			break;
      case 'S':
        snake.unshift({
  				x:snake[0].x,
  				y:snake[0].y+20
  			})
  			break;
  		case 'E':
      	snake.unshift({
  				x:snake[0].x+20,
  				y:snake[0].y
  			})
  			break;
      case 'W':
        snake.unshift({
  				x:snake[0].x-20,
  				y:snake[0].y
  			})
  			break;
  	}

  	for(i=1; i<snake.length; i++){
  		if(snake[i].x==snake[0].x && snake[i].y==snake[0].y){
        playing = false
  		}
  		ellipse(snake[i].x, snake[i].y, 20)
  	}
  	if(poma.x==snake[0].x && poma.y==snake[0].y){
  		score+=1
      poma.x = Math.floor(Math.random() * 38) * 20 + 20,
      poma.y = Math.floor(Math.random() * 18) * 20 + 20
  	}else{
  		snake.pop()
  	}
  	ellipse(snake[0].x, snake[0].y, 20)
  	fill(255,0,0)
  	ellipse(poma.x, poma.y, 20)
  	fill(255)
    text(score, 30,30)
  }else{
    background(255,0,0)
    textAlign(CENTER)
    text(score, 400, 170)
    text('RETRY',400, 200)
  }

}

function keyPressed(){
	if(keyCode == UP_ARROW && snake[0].y!=snake[1].y+20) direction = 'N'
	if(keyCode == DOWN_ARROW && snake[0].y!=snake[1].y-20) direction = 'S'
	if(keyCode == RIGHT_ARROW && snake[0].x!=snake[1].x-20) direction = 'E'
	if(keyCode == LEFT_ARROW && snake[0].x!=snake[1].x+20) direction = 'W'
}

function mouseClicked(){
  if (!playing){
    playing = true
    snake = []
    direction = 'N'
    setup();
  }
}
