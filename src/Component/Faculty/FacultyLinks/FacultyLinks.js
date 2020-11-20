import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ViewStudent from "../Student/ViewStudent/ViewStudent";
import AddMark from "../Student/AddMark/AddMark";
import AssignStudent from "../Student/AssignStudent/AssignStudent";
import Profile from "../Profile/Profile";
import SelectedCourse from "../../Admin/Course/CourseDetails/SelectedCourse/SelectedCourse";
export default function AdminLinks() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/faculty/selected-course"
          exact
          component={SelectedCourse}
        />
        <Route
          path="/faculty/student/add-mark"
          exact
          component={AddMark}
        />
        <Route
          path="/faculty/student/view-student"
          exact
          component={ViewStudent}
        />
        <Route
          path="/faculty/student/assign-student"
          exact
          component={AssignStudent}
        />
        <Route path="/admin/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}