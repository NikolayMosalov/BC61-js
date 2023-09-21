<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QA 6 - 7</title>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css"
      integrity="sha512-wpPYUAdjBVSE4KJnH1VR1HeZfpl1ub8YT/NKx4PuQ5NmX2tKuGu6U/JRp5y+Y8XG2tV+wKQpNHVUX03MfMFn9Q=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <!-- Task -1 -->
    <section>
      <div class="container">
        <p class="task-title">Task 01</p>
        <ul class="film-list js-film-list"></ul>
      </div>
    </section>

    <!-- Task - 02 -->
    <section>
      <div class="container">
        <p class="task-title">Task 02</p>

        <h2>TODO List</h2>
        <form class="todos-form js-todos__form">
          <input
            class="todos-input"
            type="text"
            placeholder="Додати завдання"
            name="user-todos"
          />
          <button class="todos-btn" type="submit">Додати</button>
        </form>
        <ul class="js-todos-list">
          <!-- сюди будуть додаватися елементи списку -->
        </ul>
      </div>
    </section>

    <!-- Task - 03 -->
    <section>
      <div class="container">
        <p class="task-title">Task 03</p>
        <h1 class="title">Search of the country</h1>

        <input type="text" id="search-box" class="js-search-input" />
        <p class="output-error js-output-error"></p>

        <ul class="country-list js-country-list"></ul>
      </div>
    </section>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
      integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <script type="module" src="./index.js"></script>
  </body>
</html>
