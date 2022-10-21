// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`200019000101010101020201010101010101010101010101010101020202020101010101010101020201010201020101010101010101010101010201010101020201010101010201010101010202020202010202020202020202020202020201010201010101020202020202010201020202010102020202020201020101020201020101030303030303030306020201020102070303030303030602010101010202010101010102020202020402020202020204010101020202040201010101020201010101010202020201040102010202010402020202020204020202020101020101010102020202020204020202020202040201020202020402010102010102020101010202020202020402020201020204020101020202040201010202020202010101020202010202040201020102020402020202020204020201020202020201010102020101010204020101020201040202020201020402020202020202010101010202010101020402020201020204010201010102040207030303030801010102020202020201090303030303030a0202010101020401040101020104010101020201010101010201010102020101010201010202040204020102020401010102010201010101020101020102010102020202010204010402020202040202010201020101020202020703030303030303030303030a0204010202020401020102010201020101020104010202020102020202020102020401020102040102010201010202010101020402020101010201010202020201040102010204020201020101020102020202040101010202020202020102020204020101010401010101020102020202020104020202020202010201010102020402020201040101010101020201010101010401010101010102010202020101040101020204010101010102010101010101040101010101020202010101010104010101010402010101010201010101010109030303030303030303030303030a0101010104020101010101020202020202020202010201010101010101010101010101010401020101010101010101010101010102010101010101010101010101010101090305`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile3,myTiles.tile7,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
