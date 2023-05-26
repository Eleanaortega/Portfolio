import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About Me</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Languages</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
</div>
)
}

export default Nav