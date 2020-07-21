import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReviews } from "./slices/reviews";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import Header from "./components/Header/Header";
import ReviewsList from "./components/ReviewsList/ReviewsList";
import Chart from "./components/Chart/Chart";
import { AppContainer, GridContainer, Body, FormChartWrap } from "./App.styles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <AppContainer>
      <GridContainer>
        <Header />
        <Body>
          <h1>Review and rating</h1>

          <FormChartWrap>
            <Chart />
            <ReviewForm />
          </FormChartWrap>

          <ReviewsList />
        </Body>
      </GridContainer>
    </AppContainer>
  );
}

export default App;
