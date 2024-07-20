function setup(){
    canvas=createCanvas(640,480);
    canvas.position(465,200);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    /*rectangle=x, y, w, h
    x and y hence their relationship to coordinates set its location
    w and h sets the width and height
    The fifth parameter in the rectangle function makes the radius for all four corners*/
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    /*circle= x, y, d
    x and y hence their relationship to coordinates set its location
    d sets its height and width*/
    fill(11, 161, 21);
    rect(40,40,20,385,20);
    rect(580,40,20,385,20);
    rect(30,40,580,20,20);
    rect(30,405,580,20,20);
    fill(181, 13, 13);
    circle(50,50,50);
    circle(590,50,50);
    circle(590,415,50);
    circle(50,415,50);
}
function take_snapshot(){
    save('Human_Being.png');
}
