jQuery(function($) {
    $(document).ready(function() {
        $('.element').instagramElement({
            mode : 'multiuser',
            userID : '1512591446,42793799,1438540550,1339279815,3252620724,618517613,53708228',
            accessToken : '421631593.e029fea.0ab43b7d616641c9929ee8ec2112d8ed',
            galleryMode: 'classic',
            video: true,
            showVideoControls: false
            }
        );

        setTimeout(function() {
            var $holder = $('.element')
            var $images = $holder.children('a');
            $images.detach().sort(function(a, b) {
                return $(a).data('created') - $(b).data('created');
            });

            $holder.append($images);
        }, 3000);
    });
});



// 3252620724 - Gratinado
// 618517613 - themeatballcompany
// 53708228 - elnaqui
// 42793799 - FaccioPizza
// 1512591446 - tiacocina
// 1438540550 - Cafetresb
// 1339279815 - acapulco_taqueria