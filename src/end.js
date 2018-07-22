

function drawEnd() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,2000,2000);
  ctx.fillStyle = "#FFFFFF";
  ctx.font="35px Pixeled";
  ctx.fillText("The party carries on late into the night.",100,152);
  ctx.fillText("Prince gareth gets a massive pile of presents.",130,313);
  ctx.fillText("All the guests have a great time!",130,475);
  ctx.fillText("As the party draws to a close,",230,633);
  ctx.fillText("Prince Gareth takes you aside...",530,733);
}

function drawCredits() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,2000,2000);
  ctx.fillStyle = "#FFFFFF";
  ctx.font="35px Pixeled";
  ctx.fillText("Art by Jenny Robertson",100,252);
  ctx.fillText("Programming by Jenny Robertson",100,413);
  ctx.fillText("Inspired by The Yawgh",130,575);
  ctx.fillText("",230,733);
  ctx.fillText("HAPPY BIRTHDAY GARETH! 2018",530,833);
}
