<template>
  <div>
    {{user}}
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
  </div>
</template>

<script>
export default {
    name: "user",
    data: () => {
        return {}
    },
      props: ['user'],
}
</script>