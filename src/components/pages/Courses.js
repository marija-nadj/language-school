import React from 'react'

const Courses = () => {
    return (
        <div className="container-fluid">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active text-danger" id="german-tab" data-toggle="tab" href="#german" role="tab" aria-controls="german" aria-selected="true">German</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" id="english-tab" data-toggle="tab" href="#english" role="tab" aria-controls="english" aria-selected="false">English</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" id="french-tab" data-toggle="tab" href="#french" role="tab" aria-controls="french" aria-selected="false">French</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" id="italian-tab" data-toggle="tab" href="#italian" role="tab" aria-controls="italian" aria-selected="false">Italian</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" id="spanish-tab" data-toggle="tab" href="#spanish" role="tab" aria-controls="spanish" aria-selected="false">Spanish</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" id="swedish-tab" data-toggle="tab" href="#swedish" role="tab" aria-controls="swedish" aria-selected="false">Swedish</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="german" role="tabpanel" aria-labelledby="german-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course</th>
                                <th scope="col">Level</th>
                                <th scope="col">Dates</th>
                                <th scope="col">Days</th>
                                <th scope="col">Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Beginner</td>
                                <td>25 May to 25 Jun</td>
                                <td>Monday & Thursday</td>
                                <td>7-9pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Elementary</td>
                                <td>18 May to 22 May</td>
                                <td>Monday to Friday</td>
                                <td>7am-11pm</td>
                                <td>€170</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Intermediate</td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Monday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Upper-Intermediate</td>
                                <td>15 Jul to 16 Sep</td>
                                <td>Wednesday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Elementary </td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Thursday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Beginner </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday</td>
                                <td>7-9pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Elementary </td>
                                <td>25 May to 25 Jun</td>
                                <td>Monday & Thursday</td>
                                <td>7-9pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Intermediate </td>
                                <td>23 Apr to 25 Jun</td>
                                <td>Thursday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Advanced</td>
                                <td>17 Sep to 18 Oct</td>
                                <td>Thursday</td>
                                <td>7-9pm</td>
                                <td>€220</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Proficient</td>
                                <td>18 Oct to 19 Nov</td>
                                <td>Tuesday</td>
                                <td>7-9pm</td>
                                <td>€230</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                        </tbody>
                    </table>
                
                
                
                </div>
                <div class="tab-pane fade" id="english" role="tabpanel" aria-labelledby="english-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course</th>
                                <th scope="col">Level</th>
                                <th scope="col">Dates</th>
                                <th scope="col">Days</th>
                                <th scope="col">Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Beginner</td>
                                <td>25 May to 25 Jun</td>
                                <td>Monday & Thursday</td>
                                <td>6:30-8:30pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Elementary</td>
                                <td>18 May to 22 May</td>
                                <td>Monday to Friday</td>
                                <td>7am-11pm</td>
                                <td>€170</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Intermediate</td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Monday</td>
                                <td>6:30-8:30pm</td>
                                <td>€180</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Upper-Intermediate</td>
                                <td>15 Jul to 16 Sep</td>
                                <td>Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Elementary </td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Thursday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Beginner </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€180</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Elementary </td>
                                <td>25 May to 25 Jun</td>
                                <td>Monday &Thursday</td>
                                <td>6:30-8:30pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Intermediate </td>
                                <td>23 Apr to 25 Jun</td>
                                <td>Thursday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Advanced</td>
                                <td>17 Sep to 18 Oct</td>
                                <td>Thursday</td>
                                <td>6:30-8:30pm</td>
                                <td>€220</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Upper-Intermediate</td>
                                <td>23 Apr to 25 Jun</td>
                                <td>Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€220</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Proficient</td>
                                <td>17 Sep to 18 Oct</td>
                                <td>Thursday</td>
                                <td>6:30-8:30pm</td>
                                <td>€240</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="french" role="tabpanel" aria-labelledby="french-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course</th>
                                <th scope="col">Level</th>
                                <th scope="col">Dates</th>
                                <th scope="col">Days</th>
                                <th scope="col">Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Beginner </td>
                                <td>25 May to 25 Jun</td>
                                <td>Monday & Thursday</td>
                                <td>7-9pm	</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Beginner </td>
                                <td>25 May to 29 May</td>
                                <td>Monday to Friday</td>
                                <td>7am-11pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Beginner </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Elementary  </td>
                                <td>25 May to 25 Jun</td>
                                <td>Monday & Thursday</td>
                                <td>7-9pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Elementary </td>
                                <td>25 May to 29 May</td>
                                <td>Monday to Friday</td>
                                <td>7-9pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Elementary </td>
                                <td>13 Jul to 14 Sep</td>
                                <td>Monday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Intermediate  </td>
                                <td>23 Apr to 25 Jun</td>
                                <td>Thursday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Upper Intermediate </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Advanced </td>
                                <td>17 Sep to 18 Oct</td>
                                <td>Wednesday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Proficient </td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Thursday</td>
                                <td>7-9pm</td>
                                <td>€220</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="italian" role="tabpanel" aria-labelledby="italian-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course</th>
                                <th scope="col">Level</th>
                                <th scope="col">Dates</th>
                                <th scope="col">Days</th>
                                <th scope="col">Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Beginner </td>
                                <td>25 May to 24 Jun</td>
                                <td>Monday & Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Beginner </td>
                                <td>25 May to 29 May</td>
                                <td>Monday to Friday</td>
                                <td>7 - 11pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Beginner </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday & Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Elementary </td>
                                <td>25 May to 24 Jun</td>
                                <td>Monday & Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Elementary </td>
                                <td>01 Jun to 05 Jun</td>
                                <td>Monday to Friday</td>
                                <td>7 - 11pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Elementary </td>
                                <td>13 Jul to 14 Sep</td>
                                <td>Monday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Intermediate </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Upper-Intermediate </td>
                                <td>13 Jul to 14 Sep</td>
                                <td>Monday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Advanced </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Proficient </td>
                                <td>13 Jul to 14 Sep</td>
                                <td>Monday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="spanish" role="tabpanel" aria-labelledby="spanish-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course</th>
                                <th scope="col">Level</th>
                                <th scope="col">Dates</th>
                                <th scope="col">Days</th>
                                <th scope="col">Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Beginner </td>
                                <td>25 May to 24 Jun</td>
                                <td>Monday & Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Beginner </td>
                                <td>25 May to 29 May</td>
                                <td>Monday to Friday</td>
                                <td>7 - 11pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Beginner </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday & Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Elementary </td>
                                <td>25 May to 24 Jun</td>
                                <td>Monday & Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Intermediate</td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Monday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Upper-Intermediate</td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Monday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">1 Week Course</th>
                                <td>Elementary </td>
                                <td>01 Jun to 05 Jun</td>
                                <td>Monday to Friday</td>
                                <td>7 - 11pm</td>
                                <td>€190</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Elementary </td>
                                <td>13 Jul to 14 Sep</td>
                                <td>Monday</td>
                                <td>6:30-8:30pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                <div class="tab-pane fade" id="swedish" role="tabpanel" aria-labelledby="swedish-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course</th>
                                <th scope="col">Level</th>
                                <th scope="col">Dates</th>
                                <th scope="col">Days</th>
                                <th scope="col">Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Beginner  </td>
                                <td>25 May to 25 Jun</td>
                                <td>Monday & Thursday</td>
                                <td>6:30-8:30pm</td>
                                <td>€240</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Beginner </td>
                                <td>14 Jul to 15 Sep</td>
                                <td>Tuesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€250</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Beginner </td>
                                <td>13 Jul to 14 Sep</td>
                                <td>Monday</td>
                                <td>6:30-8:30pm</td>
                                <td>€250</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Elementary  </td>
                                <td>13 Jul to 14 Sep</td>
                                <td>Monday</td>
                                <td>6:30-8:30pm</td>
                                <td>€250</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Intermediate  </td>
                                <td>15 Jul to 16 Sep</td>
                                <td>Wednesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€250</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Intermediate</td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Monday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">5 Week Course</th>
                                <td>Upper-Intermediate</td>
                                <td>16 Jul to 17 Sep</td>
                                <td>Monday</td>
                                <td>7-9pm</td>
                                <td>€200</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                            <tr>
                                <th scope="row">10 Week Course</th>
                                <td>Upper-Intermediate  </td>
                                <td>18 Sep to 19 Oct</td>
                                <td>Tuesday</td>
                                <td>6:30-8:30pm</td>
                                <td>€250</td>
                                <button type="button" className="btn btn-secondary">Book Now</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Courses;
