import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import {Text, View} from "react-native";
import {Card} from "react-native-elements";

export default function showAllReviews(){
    //todo: figure out why to get amount of items in total and loop for each one
    for(let i = 0; i<=AsyncStorage.multiGet("@gameReviews");i++){
        //ToDo: get the current reviewID of thelooped item to enable rendering
        let reviewId = "";
        //ToDo; render every review
        renderReview(reviewId).then(r => "");
    }

}

const renderReview= async(reviewId)=>{
    const userData = JSON.parse(await AsyncStorage.getItem("@gameReviews",reviewId));

    return(
      <View>
          <Card>
              <Card.Title>
                  {/*ToDO: API Call to get game Title*/}
              </Card.Title>
              <Text>
                  {userData.reviewText}
              </Text>
          </Card>
      </View>
    );
}

