import React from 'react'

const AppHeader = () => {
    return (
        <div>


            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <a class="navbar-brand" href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Kerala_State_Road_Transport_Corporation_logo.png/200px-Kerala_State_Road_Transport_Corporation_logo.png" alt="Bootstrap" width="30" height="24" />
                    </a>


                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/add">Add</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/delete">Delete</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default AppHeader