(function () {
    function parseISODate(s) {
        var m = String(s).trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (!m) return null;
        var y = +m[1];
        var mo = +m[2] - 1;
        var d = +m[3];
        var dt = new Date(y, mo, d);
        if (dt.getFullYear() !== y || dt.getMonth() !== mo || dt.getDate() !== d) return null;
        return dt;
    }

    function formatDate(d) {
        return d.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.last-updated').forEach(function (el) {
            var raw = el.getAttribute('data-last-updated');
            if (!raw) return;
            var parsed = parseISODate(raw);
            if (!parsed) return;
            el.textContent = 'Last updated: ' + formatDate(parsed);
        });
    });
})();
