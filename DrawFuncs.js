/**
 * 
 * @param {number} leftX - X Coordinate of left side of rectangle
 * @param {number} topY - Y Coordinate of top of rectangle
 * @param {number} width - Width of rectangle
 * @param {number} height - Height of rectangle
 * @
 * @param {string} drawColor - Color of rectangle
 */
function colorRect(leftX,topY,width,height,drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,width,height);
}

/**
 * 
 * @param {number} centerX - X Coordinate of center of rectangle
 * @param {number} centerY - Y Coordinate of center of rectangle
 * @param {number} width - Width of rectangle
 * @param {number} height - Height of rectangle
 * @param {string} drawColor - Color of rectangle
 */
function colorRectCentered(centerX,centerY,width,height,drawColor) {
    colorRect(centerX-width/2,centerY-height/2,width,height,drawColor)
}

/**
 * 
 * @param {number} centerX - X Coordinate of center of circle
 * @param {number} centerY - Y Coordinate of center of circle
 * @param {number} radius - Size of radius of circle
 * @param {string} drawColor - Color of circle
 */
function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

/**
 * 
 * @param {number} x1  - X Coordinate of first corner
 * @param {number} y1 - Y Coordinate of first corner
 * @param {number} x2 - X Coordinate of second corner
 * @param {number} y2 - Y Coordinate of second corner
 * @param {number} x3 - X Coordinate of third corner
 * @param {number} y3 - Y Coordinate of third corner
 * @param {string} drawColor - Color of triangle
 */
function drawTriangle(x1,y1,x2,y2,x3,y3, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.lineTo(x3, y3);
    canvasContext.fill();
}