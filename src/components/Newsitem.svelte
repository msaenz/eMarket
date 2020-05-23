<script>
  export let id;
  export let title;
  export let subtitle;
  export let cover;
</script>

<style>
  .Newsitem {
    width: 430px;
    height: 280px;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 10px;
    display: inline-block;
    cursor: pointer;
    transition: 450ms all;
    transform-origin: center left;
    -webkit-transform-origin: center left;
    position: relative;
    font-size: 20px;
  }

  .Newsitem:hover ~ .Newsitem {
    transform: translate3d(80px, 0, 0);
    -webkit-transform: translate3d(80px, 0, 0);
  }

  .Newsitem-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
  }

  .Newsitem-details {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    font-size: 10px;
    opacity: 0;
    transition: 450ms opacity;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .Newsitem-details-img {
    width: 20px;
  }

  .Newsitem:hover .Newsitem-details {
    opacity: 1;
  }

  .Newsitem-details-title {
    color: white;
    margin: 5px 0px 0px 0px;
  }

  .Newsitem-details-subtitle {
    color: white;
    font-size: 8px;
    margin: 3px 0px;
  }
</style>

<article class="Newsitem">
  <img class="Newsitem-img" src={cover} alt={title} />
  <div class="Newsitem-details">
    <div>
      <a href="/player/{id}" >
        <p>{id}</p>
        <img
          class="Newsitem-details-img"
          src="play-icon.png"
          alt="Play Music" />
      </a>
    </div>
    <p class="Newsitem-details-title">{title}</p>
    <p class="Newsitem-details-subtitle">{subtitle}</p>
  </div>
</article>
