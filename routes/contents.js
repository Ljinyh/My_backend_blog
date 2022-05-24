const express = require("express");
const Contents = require("../schemas/content");
const router = express.Router();


// 게시글 전체 조회
router.get("/contents", async(req,res) => {
        const AllContents = await Contents.find({}).sort({date: -1});

        res.json({AllContents});    
});

//게시글 상세 조회
router.get("/contents/detail/:seq", async(req,res) =>{
    const { seq } = req.params;

    const [postDetail] = await Contents.find({ seq: Number(seq)});

    res.json({
        postDetail,
    });
});


// 게시글 작성하기
router.post("/contents", async (req, res) => {
    const { seq, UserId, title, detail, date, password } = req.body;

    // const contents = await Contents.find({ seq });
    //     if(contents.length){
    //         return res.status(400).json({ success: false , errorMessage: "이미 있는 데이터입니다." });
    //     };

            const creatcontents = await Contents.create({
                seq, UserId, title, detail, date, password
            });
        res.json({ contents: creatcontents });
});

//게시글 삭제
router.delete("/contents/detail/:seq", async(req,res) =>{
    const { seq } = req.params;
    const { UserId, password } = req.body;

    const existsContentsId = await Contents.find({ seq: Number(seq)});
    if ((existsContentsId.length) && (existsContentsId[0].UserId === UserId) && (existsContentsId[0].password === password)) {
      await Contents.deleteOne({ seq: Number(seq) });
    }
    res.json({ success: true });
})

//게시글 수정
router.put("/contents/detail/:seq", async(req,res) => {
    const { seq } = req.params;
    const { UserId, title, detail, password } = req.body;
    
    const existsContentsId = await Contents.find({ seq: Number(seq)});

    if (!existsContentsId.length) {
        return res.status(400).json({errorMessage: "게시물이 존재하지 않습니다."});
      }

    if((existsContentsId[0].UserId === UserId) && (existsContentsId[0].password === password)){
        await Contents.updateOne({ seq: Number(seq) }, { $set: {title , detail} });
    };

  res.json({ success: true });
});


module.exports = router;