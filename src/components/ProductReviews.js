import React, { useState } from 'react';
import { BsTrashFill, BsPenFill } from 'react-icons/bs'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';



const ProductContent = () => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1); // 버튼 클릭 시 좋아요 수 증가
  };

  return (
    <>
      <div className="product-contentsbox">
        <div className="product-contentContainer">

          <div className="gap-60"></div>
          <div className="product-ReviewboxContainer">
            <h2>Reviews 보기</h2>
            <div className="gap-20"></div>
            <div className="product-scored">
              <Stack direction="row" spacing={2} divider={<div style={{ width: '16px', margin: '0 auto' }} />} alignItems="center">
                <div className="box-center">
                  <p>현장 활용도</p>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <div className="box-center">
                  <p>데이터 정확도</p>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </div>
                <div className="box-center">
                  <p>Solution Quality</p>
                  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </div>
                <div className="box-center">
                  <p>업무 효율성</p>
                  <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                </div>
                <div className="box-center">
                  <Button variant="outlined" style={{ fontSize: '16px' }}>
                    마음에 들면 좋아요
                    <IconButton onClick={handleLike} sx={{ color: pink[500] }}>
                      <FavoriteIcon />
                    </IconButton>
                    <h6>{likeCount} </h6>
                  </Button>
                </div>
              </Stack>
            </div>

            <div className="gap-20"></div>

            <div className="product-ReviewBox">
              <div className="reviewHeader">
                <div>
                  <p className="reviewNm">강세운</p>
                  <p className="reviewTeam">평택품질개선팀</p>
                </div>
                <p className="reviewDate">2024.02.07</p>
              </div>
              <p className="reviewContent">
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
                If you want to get inspiration or just show something directly to your clients,
                you can jump-start your development with our pre-built example pages.
                You will be able to quickly set up the basic structure for your web project.
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
              </p>
              <div className="reviewActions">
                <button className="reviewActions-btn"> <BsTrashFill />삭제하기</button>
                <button className="reviewActions-btn"> <BsPenFill />수정하기</button>
              </div>
            </div>

            <div className="product-ReviewBox">
              <div className="reviewHeader">
                <div>
                  <p className="reviewNm">도혜경</p>
                  <p className="reviewTeam">재무관리팀</p>
                </div>
                <p className="reviewDate">2024.02.07</p>
              </div>
              <p className="reviewContent">
                이 시스템 정말 잘 만든것 같습니다. 현장에서 쓰기 너무 좋습니다.
              </p>
              <div className="reviewActions">
                <button className="reviewActions-btn"> <BsTrashFill />삭제하기</button>
                <button className="reviewActions-btn"> <BsPenFill />수정하기</button>
              </div>
            </div>

            <div className="product-ReviewBox">
              <div className="reviewHeader">
                <div>
                  <p className="reviewNm">정승근</p>
                  <p className="reviewTeam">강북품질개선팀</p>
                </div>
                <p className="reviewDate">2024.02.07</p>
              </div>
              <p className="reviewContent">
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
                If you want to get inspiration or just show something directly to your clients,
                you can jump-start your development with our pre-built example pages.
                You will be able to quickly set up the basic structure for your web project.
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
                If you want to get inspiration or just show something directly to your clients,
                you can jump-start your development with our pre-built example pages.
                You will be able to quickly set up the basic structure for your web project.
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
                Each element is well presented in very complex documentation.
                You can read more about the documentation here.
              </p>
              <div className="reviewActions">
                <button className="reviewActions-btn"> <BsTrashFill />삭제하기</button>
                <button className="reviewActions-btn"> <BsPenFill />수정하기</button>
              </div>
            </div>
            <div className="gap-30"></div>
            <form className="commentForm">
              <textarea className="commentInput" placeholder="댓글을 입력하세요."></textarea>
              <div className="buttonContainer">
                <button type="submit" className="submitBtn">댓글 달기</button>
              </div>
            </form>



          </div>
          <div className="gap-60"></div>
        </div>
      </div>
      <div className="gap-60" />
      <div className="gap-60" />

    </>
  );
};



export default ProductContent;
