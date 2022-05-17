<template>
  <div @click.self="$store.state.showOptions = !$store.state.showOptions" class="OP_main_container">
  	<div class="OP_container">

      <div class="OP_close_container">
        <button @click="$store.state.showOptions = !$store.state.showOptions" class="OP_close_btn"><i class="fas fa-times-circle"></i> Close</button>
      </div>

  		<div class="__OP_container__">

        <h3>HELLO AND WELCOME!</h3>

    		<div class="OP_account_container">
          <div v-if="$store.state.isActiveUserLoggedIn" class="OP_profile_container">
            <button @click="$router.push(`/profile/${ $store.state.clientSideID }/videos`), $store.state.showOptions = !$store.state.showOptions" class="OP_profile_btn OP_link_btn"><i class="fas fa-user-circle"></i> {{ $store.state.username.substring(0, 20) }}</button>
          </div>
          <div v-if="!$store.state.isActiveUserLoggedIn" class="OP_signin_container">
            <button @click="$router.push('/signin')" class="OP_signin_btn OP_link_btn"><i class="fas fa-user-circle"></i> Signin</button>
          </div>
          <div v-if="!$store.state.isActiveUserLoggedIn" class="OP_signup_container">
            <button data-href="/signup" class="OP_signup_btn OP_link_btn"><i class="fas fa-user-circle"></i> Signup</button>
          </div>
    		</div>

    		<hr />

        <h3>NAUGHTY OR NO NAUGHTY?</h3>

    		<div class="OP_restriction_container">
    			<button class="OP_restriction_btn"><i class="fas fa-exclamation-triangle"></i> Restrictions: {{ $store.state.restrictions.toUpperCase() }} </button>
    		</div>

    		<hr />

        <h3>THE BACKBONE!</h3>

    		<div class="OP_account_container">
          <div class="OP_donoboard_container">
            <button class="OP_donoboard_btn"><i class="fas fa-wallet"></i> DonoBoard</button>
    			</div>
    			<div class="OP_dashboard_container">
            <button v-if="$store.state.isActiveUserLoggedIn" data-href="/dashboard?process=overview" class="OP_dashboard_btn OP_link_btn"><i class="fas fa-user-circle"></i> Dashboard</button>
            <button v-else data-href="/support/dashboard" class="OP_dashboard_btn OP_link_btn"><i class="fas fa-user-circle"></i> Dashboard</button>
    			</div>
    		</div>

        <hr />

        <h3>JUST FOR YOU!</h3>

    		<div class="OP_select_container">
    			<div class="OP_videos_container">
    				<button @click="$store.state.showOptions = !$store.state.showOptions, $router.push('/videos')" data-href="/videos" class="OP_videos_btn OP_link_btn"><i class="fas fa-video"></i> Videos</button>
    			</div>
    			<div class="OP_posts_container">
    				<button @click="$store.state.showOptions = !$store.state.showOptions, $router.push('/posts')" data-href="/posts" class="OP_posts_btn OP_link_btn"><i class="fas fa-sticky-note"></i> Posts</button>
    			</div>
    			<div class="OP_studio_container">
    				<button data-href="/studio" class="OP_studio_btn OP_link_btn"><i class="fas fa-cloud"></i> Studio</button>
    			</div>
    			<div class="OP_history_container">
            <button v-if="$store.state.isActiveUserLoggedIn" data-href="/user/<?php echo $session_xp->get_client_side_id(); ?>/feed/history" class="OP_history_btn OP_link_btn"><i class="fas fa-history"></i> History</button>
            <button v-else data-href="/guest/feed/history" class="OP_history_btn OP_link_btn"><i class="fas fa-history"></i> History</button>
    			</div>
    			<div class="OP_saved_container">
    			  <button v-if="$store.state.isActiveUserLoggedIn" @click="$router.push(`/profile/${ $store.state.clientSideID }/feed/later`), $store.state.showOptions = !$store.state.showOptions" class="OP_saved_btn OP_link_btn"><i class="fas fa-clock"></i> Saved</button>
            <button v-else data-href="/guest/feed/later" class="OP_saved_btn OP_link_btn"><i class="fas fa-clock"></i> Saved</button>
    			</div>
    		</div>

        <hr />

        <div v-if="$store.state.isActiveUserLoggedIn" class="OP_signout_container">
          <button @click="signout" class="OP_signout_btn" name="button">Signout</button>
        </div>

  		</div>

      <div @click="$store.commit('toggleFilter'), $store.commit('toggleOptions')" class="OP_search_main_container">
        <div class="OP_search_container">
          <button class="OP_search_btn" name="button"><i class="fas fa-search"></i></button>
          <input class="OP_search_input" type="search" name="" value="" placeholder="Search..." readonly>
        </div>
      </div>

  	</div>
  </div>
</template>

<style src="./Options.css"></style>

<script src="./Options.js"></script>
