(function(Hypersolid) {

  /*
   * Hypercube
   */

  Hypersolid.Hypercube = function() {
    return new Hypercube();
  };
  function Hypercube() {};
  Hypercube.prototype = Hypersolid.Shape([
    { x:  1, y:  1, z:  1, w:  1 },
    { x:  1, y:  1, z:  1, w: -1 },
    { x:  1, y:  1, z: -1, w:  1 },
    { x:  1, y:  1, z: -1, w: -1 },
    { x:  1, y: -1, z:  1, w:  1 },
    { x:  1, y: -1, z:  1, w: -1 },
    { x:  1, y: -1, z: -1, w:  1 },
    { x:  1, y: -1, z: -1, w: -1 },
    { x: -1, y:  1, z:  1, w:  1 },
    { x: -1, y:  1, z:  1, w: -1 },
    { x: -1, y:  1, z: -1, w:  1 },
    { x: -1, y:  1, z: -1, w: -1 },
    { x: -1, y: -1, z:  1, w:  1 },
    { x: -1, y: -1, z:  1, w: -1 },
    { x: -1, y: -1, z: -1, w:  1 },
    { x: -1, y: -1, z: -1, w: -1 }
  ], [
    [ 0,  1], [ 0,  2], [ 0,  4], [ 0,  8],
              [ 1,  3], [ 1,  5], [ 1,  9],
              [ 2,  3], [ 2,  6], [ 2, 10],
                        [ 3,  7], [ 3, 11],
              [ 4,  5], [ 4,  6], [ 4, 12],
                        [ 5,  7], [ 5, 13],
                        [ 6,  7], [ 6, 14],
                                  [ 7, 15],
              [ 8,  9], [ 8, 10], [ 8, 12],
                        [ 9, 11], [ 9, 13],
                        [10, 11], [10, 14],
                                  [11, 15],
                        [12, 13], [12, 14],
                                  [13, 15],
                                  [14, 15]
  ],
  []);

  // Random 4D points
  Hypersolid.RandomPoints = function() {
    return new RandomPoints();
  };
  function RandomPoints() {};
  RandomPoints.prototype = Hypersolid.Shape(generateRandomPoints(), [], []);

  function generateRandomPoint() {
    return {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
      w: Math.random() * 2 - 1
    };
  }

  function generateRandomPoints() {
    var points = [];
    for (var i = 0; i < 50; i++) {
      points.push(generateRandomPoint());
    }
    return points;
  }

  // Random clustered 4D points with labels
  Hypersolid.ClusteredPoints = function() {
    return new ClusteredPoints();
  };
  function ClusteredPoints() {};
  var clusteredPoints = generateClusteredPoints();
  ClusteredPoints.prototype = Hypersolid.Shape(clusteredPoints.points, [], clusteredPoints.labels);

  function generateClusteredPoints() {
    var points = [];
    var labels = [];
    for (var i = 0; i < 5; i++) {
      var center = generateRandomPoint();
      for (var j = 0; j < 20; j++) {
        points.push(generateRandomPointAroundCenter(center));
        labels.push(i);
      }
    }
    return {
      points: points,
      labels: labels
    };
  }
  
  function generateRandomPointAroundCenter(center) {
    // center is a 4D point, label is the class number (0-9)
    return {
      x: center.x + (Math.random() - 0.5) / 2,
      y: center.y + (Math.random() - 0.5) / 2,
      z: center.z + (Math.random() - 0.5) / 2,
      w: center.w + (Math.random() - 0.5) / 2,
    };
  }

  // 5 cell
  Hypersolid.Simplex = function() {
    return new Simplex();
  };
  function Simplex() {};
  Simplex.prototype = Hypersolid.Shape([
    {"x":0,"y":0,"z":0,"w":2},
    {"x":-1,"y":1,"z":1,"w":0},
    {"x":1,"y":-1,"z":1,"w":0},
    {"x":1,"y":1,"z":-1,"w":0},
    {"x":-1,"y":-1,"z":-1,"w":0}
  ], [
    [0,1],[0,2],[0,3],
    [1,2],[1,3],
    [2,3],
    [3,4],
    [4,0],[4,1],[4,2],
  ]);

  // 16 cell
  Hypersolid.Cross = function() {
    return new Cross();
  };
  function Cross() {};
  Cross.prototype = Hypersolid.Shape([
    {"x":-2,"y":0,"z":0,"w":0},
    {"x":0,"y":-2,"z":0,"w":0},
    {"x":0,"y":0,"z":-2,"w":0},
    {"x":0,"y":0,"z":0,"w":-2},
    {"x":2,"y":0,"z":0,"w":0},
    {"x":0,"y":2,"z":0,"w":0},
    {"x":0,"y":0,"z":2,"w":0},
    {"x":0,"y":0,"z":0,"w":2}
  ], [
    [0,1],[0,2],[0,3],[0,5],[0,6],
    [1,2],[1,3],[1,4],[1,6],
    [2,3],[2,4],[2,5],
    [3,4],[3,5],
    [4,5],[4,6],
    [5,6],
    [6,3],[6,7],
    [7,0],[7,1],[7,2],[7,4],[7,5]
  ]);

  // 24 cell
  Hypersolid.Icositetrachoron = function() {
    return new Icositetrachoron();
  };
  function Icositetrachoron() {};
  Icositetrachoron.prototype = Hypersolid.Shape([
    {x:-2,y:0,z:0,w:0},
    {x:0,y:-2,z:0,w:0},
    {x:0,y:0,z:-2,w:0},
    {x:0,y:0,z:0,w:-2},
    {x:2,y:0,z:0,w:0},
    {x:0,y:2,z:0,w:0},
    {x:0,y:0,z:2,w:0},
    {x:0,y:0,z:0,w:2},
    {x:-1,y:-1,z:-1,w:-1},
    {x:-1,y:-1,z:-1,w:1},
    {x:-1,y:-1,z:1,w:-1},
    {x:-1,y:-1,z:1,w:1},
    {x:-1,y:1,z:-1,w:-1},
    {x:-1,y:1,z:-1,w:1},
    {x:-1,y:1,z:1,w:-1},
    {x:-1,y:1,z:1,w:1},
    {x:1,y:-1,z:-1,w:-1},
    {x:1,y:-1,z:-1,w:1},
    {x:1,y:-1,z:1,w:-1},
    {x:1,y:-1,z:1,w:1},
    {x:1,y:1,z:-1,w:-1},
    {x:1,y:1,z:-1,w:1},
    {x:1,y:1,z:1,w:-1},
    {x:1,y:1,z:1,w:1}
  ], [
    [0,8],
    [10,0],[10,1],[10,11],[10,14],[10,18],[10,3],
    [11,0],[11,1],[11,15],[11,19],[11,6],[11,7],
    [12,0],[12,13],[12,14],[12,2],[12,20],[12,3],
    [13,0],[13,15],[13,2],[13,21],[13,5],[13,7],
    [14,0],[14,15],[14,22],[14,3],[14,5],[14,6],
    [15,0],[15,23],[15,5],[15,6],[15,7],
    [16,1],[16,17],[16,18],[16,2],[16,20],[16,3],
    [17,1],[17,19],[17,2],[17,21],[17,4],[17,7],
    [1,8],
    [18,1],[18,19],[18,22],[18,3],[18,4],[18,6],
    [19,1],[19,23],[19,4],[19,6],[19,7],
    [20,2],[20,21],[20,22],[20,3],[20,4],[20,5],
    [21,2],[21,23],[21,4],[21,5],[21,7],
    [22,23],[22,3],[22,4],[22,5],[22,6],
    [23,4],[23,5],[23,6],[23,7],
    [2,8],[3,8],
    [4,16],
    [5,12],
    [6,10],
    [7,9],
    [8,10],[8,12],[8,16],[8,9],
    [9,0],[9,1],[9,11],[9,13],[9,17],[9,2]
  ]);
})(window.Hypersolid = window.Hypersolid || {});
