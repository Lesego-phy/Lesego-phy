import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { listEvents } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

  const [events, setEvents] = useState([]);

  const route = useRoute();
  const { /*eventtype*/ viewport }  = route.params;

  useEffect(() => {
    const fetchEvents = async () => {
      try {

        const eventsResult = await API.graphql(
          graphqlOperation(listEvents, {
            filter: {
              and: {
                //eventType,

                latitude: {
                  between: [
                    viewport.southwest.lat,
                    viewport.northeast.lat,
                  ],
                },
                longitude: {
                  between: [
                    viewport.southwest.lng,
                    viewport.northeast.lng,
                  ],
                }
              }
            }
          })
        )

        setEvents(eventsResult.data.listEvents.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchEvents();
  }, [])

  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#f15454',
      indicatorStyle: {
        backgroundColor: '#f15454',
      }
    }}>
      <Tab.Screen name={"list"}>
        {() => (
          <SearchResults events={events} />
        )}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => (
          <SearchResultsMap events={events} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
