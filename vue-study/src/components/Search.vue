<template>
  <section class="search">
    <div class="form-group">
      <label class="search-input-container">
        <span class="title">Enter name:</span>
        <div class="input--wrap">
          <input
            type="text"
            placeholder="Search users..."
            class="form-control"
          />
          <button class="searchbutton">search</button>
        </div>
      </label>
      <div class="filter-block">
        <label class="filter-class">
          <span class="filter-class--title">Show on page:</span>
          <select name="showTotal" class="filter-select">
            <option value="total">total</option>
          </select>
        </label>
        <label class="filter-class">
          <span class="filter-class--title">Sort:</span>
          <select name="showTotal" class="filter-select">
            <option value="1">sort.name</option>
          </select>
        </label>
      </div>
    </div>

    <section hidden>
      <div class="user_not-found">
        user with name <strong>input.value </strong> has no found :(
      </div>

      <div class="error">Ooops Eror: error</div>

      <div class="find-first-user">
        <span class="greeting">YOooo meeeN!</span>
        <span class="greeting-sub"
          >Find your first user, here, only today!</span
        >
      </div>

      <div class="search-result">
        <div class="search-result--total">
          Total found <strong>10</strong> users
        </div>
        <ul class="search-result--list">
          <li class="search-result--item">
            <div class="user-big-avatar"></div>
            <div class="avatar">
              <img src="" alt="item.name" />
            </div>
            <div class="user-name">item.name</div>
            <div class="user-location">item.location</div>
            <div class="user-data">item.company</div>
            <div class="user-data">item.email</div>
            <div class="user-data">item.company</div>
            <div class="divider"></div>
            <div class="user-item--footer">
              <div class="item followers-count">
                <span>Followers:</span>
                <span>item.followers</span>
              </div>
              <div class="item show-repos">
                <button role="button" type="submit" class="repo-link">
                  User repos
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div class="pagination"></div>
      </div>
    </section>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "SearchComponent",
  data: () => {
    users: [];
    errors: [];
  },
  methods: {
    getUserData(user) {
    
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  width: 100%;

  .form-group {
    display: flex;
    flex-direction: column;
  }
}

.search-result {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.user_not-found {
  margin: 3em 0;
  color: var(--black);
  text-align: center;
  font-size: 1.1em;
}

.find-first-user {
  margin: 6em auto 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;

  .greeting {
    font-size: 72px;
    color: var(--red);
    font-weight: 600;
  }

  .greeting-sub {
    font-size: 28px;
    color: var(--black);
    font-weight: 100;
  }
}

.search-result--total {
  text-align: right;
  color: var(--black);
  font-size: 16px;
  margin: 3em 0 0 0;
  padding: 1em 0 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.search-result--list {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  margin: 100px 0 0 0;
  padding: 0;

  .search-result--item {
    list-style: none;
    border-radius: 10px;
    padding: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background-color: #f2f2f2;
    border: 1px solid #b5bbb025;
    color: #534d6c;
    text-align: center;

    .user-big-avatar {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #534d6c;
      width: 100%;
      height: 100px;
    }

    .avatar {
      width: 154px;
      height: 154px;
      position: relative;
      display: flex;
      margin: -77px auto 0 auto;
      border: 2px solid var(--white);
      border-radius: 50%;
      overflow: hidden;
      background-color: var(--white);

      img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .user-name {
      margin: 10px 0 0 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      font-size: 24px;
    }

    .user-location {
      font-weight: bold;
    }

    .user-data {
      font-size: 14px;
      margin-top: 5px;
      width: 100%;
      display: inline-block;
    }

    .divider {
      margin-top: 30px;
    }

    .user-item--footer {
      display: flex;
      flex-direction: row;
      border-top: 1px solid #b5bbb025;
      margin-top: auto;
      align-items: center;
      margin-bottom: 0;

      .item {
        width: 50%;
      }

      .followers-count {
        border-right: 1px solid #b5bbb025;
        padding: 5px;
        font-size: 13px;
        text-align: center;

        span {
          display: inline-block;
          width: 100%;
        }
      }

      .repo-link {
        border: none;
        color: var(--red);
        background-color: none;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>