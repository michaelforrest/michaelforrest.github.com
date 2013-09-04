var document = app.activeDocument;
var base_path = Folder.selectDialog();
for(var i = 0; i < document.artboards.length; i++){
  var artboard = document.artboards[i];
  document.artboards.setActiveArtboardIndex(i); // TODO: encapsulate properly
  exportArtboard(artboard, 100, "");
  // exportArtboard(artboard, 200, "@2x");
}

function exportArtboard(artboard, scale, suffix) {
  var options = new ExportOptionsPNG24();
  options.antiAliasing = true;
  options.transparency = true; 
  options.artBoardClipping = true;
  options.horizontalScale = scale;
  options.verticalScale = scale;
  
  var filename = artboard.name + suffix + ".png";
  var destination_path = base_path + "/" + filename;
  var outputFile = new File(destination_path);
  document.exportFile(outputFile, ExportType.PNG24, options);


};
